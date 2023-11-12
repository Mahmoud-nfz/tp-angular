import { Component } from '@angular/core';
import { CV, CvService } from '../cv.service';
import { EmbaucheService } from '../embauche.service';
import { ToastrService } from 'ngx-toastr';
import { CvCardComponent } from '../cv-card/cv-card.component';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
})
export class CvListComponent {
  cvs: CV[] = [];
  hiredEmployees: CV[] = [];

  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {
    this.cvs = cvService.getCvs();
    this.hiredEmployees = embaucheService.getHiredEmployees();
  }

  hire(cv: CV) {
    if (this.embaucheService.hireEmployee(cv)) {
      // Successfully hired
      this.hiredEmployees = this.embaucheService.getHiredEmployees();
    } else {
      this.toastr.warning(`${cv.nom} is already hired.`, 'Warning');
      // CV is already hired, show a warning (you can use Angular Material's MatSnackBar or another notification library)
      // Example: this.toastr.warning('This person is already hired.', 'Warning');
    }
  }
}
