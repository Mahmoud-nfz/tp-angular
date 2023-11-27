import { Component, Input } from '@angular/core';
import { CV } from '../cv.service';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent {
  @Input() cv!: CV;
}
