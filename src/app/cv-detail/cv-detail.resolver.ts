import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CvService, CV } from '../cv.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CvDetailResolver implements Resolve<Observable<CV | null>> {
  constructor(private cvService: CvService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CV | null> {
    const id = route.paramMap.get('id');

    if (id) {
      return of(this.cvService.getCvById(+id)).pipe(
        catchError((error) => {
          console.error('Error fetching CV:', error);
          return of(null);
        })
      );
    } else {
      return of(null);
    }
  }
}
