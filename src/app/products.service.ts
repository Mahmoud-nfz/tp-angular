import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://dummyjson.com/products';
  private pageSize = 4;
  private currentPage = 1;

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<any[]> {
    const url = `${this.apiUrl}?limit=${this.pageSize}&skip=${this.currentPage}`;
    return this.http.get<any[]>(url).pipe(
      //@ts-ignore
      map((productsInfo) => productsInfo.products)
    );
  }

  loadMoreProducts(): Observable<any[]> {
    this.currentPage++;
    return this.fetchProducts();
  }
}
