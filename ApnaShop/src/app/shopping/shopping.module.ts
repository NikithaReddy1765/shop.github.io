import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { ProductsComponent } from './components/cart/products.component';
import { ShippingFormsComponent } from './components/shipping-forms/shipping-forms.component';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CheckoutComponent } from './components/checkout/checkout.component';





@NgModule({
  declarations: [
   
   
    ShippingFormsComponent,
            CheckOutComponent,
            CheckoutComponent,
 
  
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule

   
    
  ]
})
export class ShoppingModule { }
