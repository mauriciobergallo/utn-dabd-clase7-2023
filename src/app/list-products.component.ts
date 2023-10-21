import { Component } from '@angular/core';
import { IProduct, PRODUCTS_DATA } from 'src/data/product';

@Component({
  selector: 'rb-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: IProduct[] = PRODUCTS_DATA;
}
