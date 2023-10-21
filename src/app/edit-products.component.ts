import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rb-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit{
  productId: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.route.paramMap.subscribe(p => {
      this.productId = +p.get('id')!;
    });
  }
}
