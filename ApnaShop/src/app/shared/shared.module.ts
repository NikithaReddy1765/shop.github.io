import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductsComponent } from '../admin/components/admin-products/admin-products.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule { }
