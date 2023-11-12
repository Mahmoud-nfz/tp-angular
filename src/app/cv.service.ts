import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: CV[] = [
    {
      id: -1,
      nom: 'ALI',
      age: 11,
      poste: 'PHD',
      image:
        'https://www.clker.com/cliparts/5/7/4/5/139046043173967868munawar.jpg',
    },
    {
      id: -1,
      nom: 'Mounir',
      age: 21,
      poste: 'MSc',
      image:
        'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11715923.jpg',
    },
  ];

  constructor(private dataService: DataService, private toastr: ToastrService) {
    this.dataService
      .getData()
      .pipe(
        catchError((error) => {
          // Handle the error
          this.toastr.error(
            'An error occurred while fetching data from the API.'
          );
          return throwError(error); // Re-throw the error to propagate it to the subscriber
        })
      )
      .subscribe((result) => {
        result.map((e: any) => {
          const personne = {
            nom: e.name + ' ' + e.firstname,
            age: e.age,
            poste: e.job,
            id: e.id,
          } as CV;
          personne.image = 'https://www.w3schools.com/howto/img_avatar.png';
          this.cvs.push(personne);
        });
      });
  }

  addCv(cv: CV) {
    this.cvs.push(cv);
  }

  getCvs() {
    return this.cvs;
  }

  getCvById(id: number) {
    const cv = this.cvs.find((cv) => cv.id === +id);
    if (cv) {
      return cv;
    }
    return null;
  }
}

export interface CV {
  nom: string;
  age: number;
  poste: string;
  image: string;
  id: number;
}
