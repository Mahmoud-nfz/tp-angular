import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService, CV } from '../cv.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent implements OnInit {
  cv: CV | undefined | null;

  constructor(
    private route: ActivatedRoute,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.cv = this.cvService.getCvById(+id);
      } else {
        this.cv = null; // Set to null when no valid 'id' is present
      }
    });
  }
}
