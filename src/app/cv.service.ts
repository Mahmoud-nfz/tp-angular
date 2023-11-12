import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: CV[] = [
    {
      nom: 'ALI',
      age: 11,
      poste: 'PHD',
      image:
        'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rZJIMvhmliwmde8a6/videoblocks-happy-old-man-outdoors-face-of-person-smiling_hd6mryptl_thumbnail-1080_01.png',
    },
    {
      nom: 'Mounir',
      age: 21,
      poste: 'MSc',
      image:
        'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11715923.jpg',
    },
  ];

  addCv(cv: CV) {
    this.cvs.push(cv);
  }

  getCvs() {
    return this.cvs;
  }
}

export interface CV {
  nom: string;
  age: number;
  poste: string;
  image: string;
}
