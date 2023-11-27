import { Component } from '@angular/core';
import { CV, CvService } from '../cv.service';
import { EmbaucheService } from '../embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  cvs: CV[] = [];
  hiredEmployees: CV[] = [];
  filteredCvs: CV[] = [];
  filteredHiredEmployees: CV[] = [];

  selectedTab: string = 'juniors';

  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
  ) {
    this.cvs = cvService.getCvs();
    this.hiredEmployees = embaucheService.getHiredEmployees();
    this.selectTab('juniors');
  }

  hire = (cv: CV) => {
    console.log('Hiring', cv);
    if (this.embaucheService.hireEmployee(cv)) {
      // Successfully hired
      this.hiredEmployees = this.embaucheService.getHiredEmployees();
      this.selectTab(this.selectedTab);
      console.log(this.hiredEmployees);
      console.log(this.filteredHiredEmployees);
    } else {
      this.toastr.warning(`${cv.nom} is already hired.`, 'Warning');
      // CV is already hired, show a warning (you can use Angular Material's MatSnackBar or another notification library)
      // Example: this.toastr.warning('This person is already hired.', 'Warning');
    }
  };

  selectTab(tab: string) {
    this.selectedTab = tab;
    if (tab === 'juniors') {
      this.filteredCvs = this.cvs.filter((cv) => cv.age < 40);
      this.filteredHiredEmployees = this.hiredEmployees.filter(
        (cv) => cv.age < 40
      );
    } else if (tab === 'seniors') {
      this.filteredCvs = this.cvs.filter((cv) => cv.age >= 40);
      this.filteredHiredEmployees = this.hiredEmployees.filter(
        (cv) => cv.age >= 40
      );
    }
  }
}
