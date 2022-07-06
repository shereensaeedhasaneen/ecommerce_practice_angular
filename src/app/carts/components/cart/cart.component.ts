import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/models/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  /*
    1- list all cart products
    2- get items price total
    3- minus quantity
    4- plus quantity
    5- detect input quantity on change (if write in input without click on plus or minus)
    6- delete product
    7- clear cart
    8- get cart products length
    9- send cart to backend api
  */
    cartProduct_arr:{items:IProduct,quantity:number}[]=[];
  constructor() { }

  ngOnInit(): void {
    this.getCartProducts();
    this.getItemsPriceTotal()
  }
//1- list all cart products
  getCartProducts(){
    if("cart" in localStorage){
      this.cartProduct_arr=JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cartProduct_arr)
    }
  }
//2- get items price total
  getItemsPriceTotal(){
    let sum =0;
    for(let x in this.cartProduct_arr){
        console.log(x) // 0 1 2 3 4
        sum+=this.cartProduct_arr[x].items.price * this.cartProduct_arr[x].quantity;
      }
      console.log(sum);
      return sum;
    }

}
