import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListProductsComponent } from './list-products.component';
import { AddProductsComponent } from './add-products.component';
import { EditProductsComponent } from './edit-products.component';
import { NotFoundComponent } from './not-found.component';

const ROUTES: Route[] = [
  {
    path: 'products',
    children: [
      {
        path: 'add',
        component: AddProductsComponent
      },
      {
        path: ':id/edit', // products/1234/edit
        component: EditProductsComponent
      },
      {
        path: '',
        component: ListProductsComponent
      },
    ]
  },
  {
    path:'',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    AddProductsComponent,
    EditProductsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
