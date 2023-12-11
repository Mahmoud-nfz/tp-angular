import { Component, OnInit } from '@angular/core';
import { CV, CvService } from '../cv.service';
import { EmbaucheService } from '../embauche.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  cvs$: Observable<CV[]>;
  hiredEmployees$: Observable<CV[]>;
  filteredCvs$!: Observable<CV[]>;
  filteredHiredEmployees$!: Observable<CV[]>;

  selectedTab: string = 'juniors';

  constructor(
    public cvService: CvService,
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {
    this.cvs$ = this.cvService.getCvs().pipe(
      tap((cvs) => {
        this.selectTab(this.selectedTab);
      })
    );
    this.hiredEmployees$ = this.embaucheService.getHiredEmployees();
  }

  ngOnInit() {
    this.selectTab('juniors');
  }

  hire = (cv: CV) => {
    console.log('Hiring', cv);
    if (this.embaucheService.hireEmployee(cv)) {
      // Successfully hired
      this.hiredEmployees$ = this.embaucheService.getHiredEmployees();
      this.selectTab(this.selectedTab);
    } else {
      this.toastr.warning(`${cv.nom} is already hired.`, 'Warning');
    }
  };

  selectTab(tab: string) {
    console.log('Selected tab', tab);
    this.selectedTab = tab;
    if (tab === 'juniors') {
      this.filteredCvs$ = this.cvs$.pipe(
        map((cvs) => cvs.filter((cv) => cv.age < 40))
      );
      this.filteredHiredEmployees$ = this.hiredEmployees$.pipe(
        map((cvs) => cvs.filter((cv) => cv.age < 40))
      );
    } else if (tab === 'seniors') {
      this.filteredCvs$ = this.cvs$.pipe(
        map((cvs) => cvs.filter((cv) => cv.age >= 40))
      );
      this.filteredHiredEmployees$ = this.hiredEmployees$.pipe(
        map((cvs) => cvs.filter((cv) => cv.age >= 40))
      );
    }
  }
}
