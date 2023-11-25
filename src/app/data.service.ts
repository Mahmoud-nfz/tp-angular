import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CV } from './cv.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://apilb.tridevs.net/api/personnes';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
