import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IProduct, PRODUCTS_DATA } from 'src/data/product';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: IProduct[] = PRODUCTS_DATA;

  constructor(private router: Router) {}

  onEditProduct(productId: number) {
    this.router.navigate(['products', productId, 'edit']);
  }
}
