import { Component, OnInit } from '@angular/core';

import { Products } from 'src/products.model';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts:Products[]=[];
  isFetching:boolean=false;

  constructor(private productsServices:ProductsService,private cartServices:CartService) { }

  ngOnInit(): void {
  }
  // addtocart(item: any){
  //   this.cartServices.addtoCart(item)
  // }
  // onProductsFetch(){
  //   this.fetchProducts(); 
  // }
  // private fetchProducts() {
  //   this.isFetching = true;
  //   this.productsServices.fetchProduct().subscribe((products)=>{
  //     this.allProducts = products;
  //     this.isFetching = false;
  //   });
  // } 


}
