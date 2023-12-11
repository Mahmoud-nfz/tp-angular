import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cv-search',
  templateUrl: './cv-search.component.html',
  styleUrls: ['./cv-search.component.css'],
})
export class CvSearchComponent {
  myForm: FormGroup;
  options: string[] = ['John', 'Jane', 'Doe', 'Smith'];
  filteredOptions: string[] = [];
  showOptions: boolean = false;

  private searchSubject = new Subject<string>();
  private searchSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: [''],
    })

    this.searchSubscription = this.searchSubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((inputValue) => {
        this.filteredOptions = this.options.filter((option) =>
          option.toLowerCase().includes(inputValue.toLowerCase())
        );
        this.showOptions = this.filteredOptions.length > 0;
      });
  }

  onInputChange(event: any): void {
    const inputValue = event.target.value;
    this.searchSubject.next(inputValue);
  }

  selectOption(option: string): void {
    this.myForm.get('name')?.setValue(option);
    this.showOptions = false;
  }

  ngOnDestroy(): void {
    // Clean up the subscription to avoid memory leaks
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
