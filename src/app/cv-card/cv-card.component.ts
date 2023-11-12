import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent {
  @Input() name!: string; // Input property for the name
  @Input() image!: string; // Input property for the image
  @Input() age!: number; // Input property for the image
  @Input() poste!: string; // Input property for the image
}
