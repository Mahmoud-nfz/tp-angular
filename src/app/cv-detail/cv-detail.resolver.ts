// cv-detail.resolver.ts

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
      // Convert the result into an observable using the 'of' operator
      return of(this.cvService.getCvById(+id)).pipe(
        catchError((error) => {
          console.error('Error fetching CV:', error);
          return of(null); // Return an observable with null in case of an error
        })
      );
    } else {
      return of(null); // Return an observable with null when no valid 'id' is present
    }
  }
}
