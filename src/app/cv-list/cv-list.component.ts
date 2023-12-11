import { Component, Input } from '@angular/core';
import { CV, CvService } from '../cv.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
})
export class CvListComponent {
  @Input() cvs: CV[] | null = [];
  @Input() hiredEmployees: CV[] | null = [];
  @Input() hire: Function = (cv: CV) => {console.log('Not initialized', cv);};

  invokeHire(cv: CV): void {   
    console.log('Clicked Hire', cv); 
    this.hire(cv);
  }

}
