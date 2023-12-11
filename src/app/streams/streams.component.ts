import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, merge, Subject } from 'rxjs';
import { scan, reduce, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
})
export class StreamsComponent implements OnInit {
  // Reactive form
  numberForm!: FormGroup;

  // Results
  mergeResult$!: Observable<number>;
  reduceResult$!: Observable<number>;
  scanResult$!: Observable<number>;

  // Subject for terminating the streams
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Create the reactive form
    this.numberForm = this.fb.group({
      stream1: [],
      stream2: [],
    });

    // Get observables from form controls
    //@ts-ignore
    const stream1$: Observable<number > =
      this.numberForm.get('stream1')?.valueChanges;
    //@ts-ignore
    const stream2$: Observable<number > =
      this.numberForm.get('stream2')?.valueChanges;

    // Merge with termination
    this.mergeResult$ = merge(stream1$, stream2$).pipe(
      // Ensure that only valid numbers are emitted
      takeUntil(this.destroy$)
      // scan((_, value) => value as number, 0)
    );

    // Reduce with termination
    this.reduceResult$ = merge(stream1$, stream2$).pipe(
      // Ensure that only valid numbers are emitted
      takeUntil(this.destroy$),
      reduce((acc, value) => acc + (value as number), 0)
    );

    // Scan with termination
    this.scanResult$ = merge(stream1$, stream2$).pipe(
      // Ensure that only valid numbers are emitted
      takeUntil(this.destroy$),
      scan((acc, value) => acc + (value as number), 0)
    );
  }

  // Function to terminate the streams
  terminateStreams() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
