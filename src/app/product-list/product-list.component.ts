import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<any[]>;
  hasMoreProducts = true;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productService.fetchProducts();
  }

  loadMoreProducts() {
    console.log(this.products$) ;
    this.productService.loadMoreProducts().subscribe(
      (newProducts) => {
        if (newProducts.length === 0) {
          this.hasMoreProducts = false;
        } else {
          this.products$ = this.products$.pipe(
            map((existingProducts) => {
              return [...existingProducts, ...newProducts];
            })
          );
        }
      },
      (error) => {
        console.error('Error loading more products:', error);
      }
    );
  }
}
