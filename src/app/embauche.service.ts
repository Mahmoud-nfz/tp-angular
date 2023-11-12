import { Injectable } from '@angular/core';
import { CV } from './cv.service';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private hiredEmployees: CV[] = [];

  hireEmployee(cv: CV) {
    if (!this.hiredEmployees.includes(cv)) {
      this.hiredEmployees.push(cv);
      return true; // Successfully hired
    } else {
      return false; // Already hired
    }
  }

  getHiredEmployees() {
    return this.hiredEmployees;
  }
}
