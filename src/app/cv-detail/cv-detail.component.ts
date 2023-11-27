// cv-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CV } from '../cv.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent implements OnInit {
  cv: CV | null;

  constructor(private route: ActivatedRoute) {
    this.cv = null;
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.cv = data['cv'];
    });
  }
}
