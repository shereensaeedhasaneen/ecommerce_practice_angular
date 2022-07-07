import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/models/iproduct';
import { CartsService } from '../../services/carts.service';

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
    AddToCartSuccess:boolean=false;
  constructor(private CartsService:CartsService) { }

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
//3- minus quantity
  minus_Quantity(index:number){
      this.cartProduct_arr[index].quantity--
      localStorage.setItem("cart" ,JSON.stringify(this.cartProduct_arr))
  }
//4- plus quantity
  plus_Quantity(index:number){
    this.cartProduct_arr[index].quantity++
    localStorage.setItem("cart" ,JSON.stringify(this.cartProduct_arr))
  }
//5- detect input quantity on change (if write in input without click on plus or minus)
//لو كتبت بايدي في الانبوت وعملت ريفرش ال انا كتبته بايدي مش هيتسيف وهترجعلي القيمه القديمه عشان معملتلهاش استور في اللوكال استوريج
  inputChange(){
    localStorage.setItem("cart" ,JSON.stringify(this.cartProduct_arr))
    // detect change happen when make blur from input
  }

//6- delete product
  delete_Product(index:number){
   // delete this.cartProduct_arr[index];
   this.cartProduct_arr.splice(index,1) // عايز امسح من اندكس رقم الاندكس ال هيبعنه واهسمح اليمنت واحد بس
    localStorage.setItem("cart" ,JSON.stringify(this.cartProduct_arr))

  }
//7- clear cart
  clearShoppingCart(){
      this.cartProduct_arr=[];
      localStorage.setItem("cart" ,JSON.stringify(this.cartProduct_arr));
  }
//9- send cart to backend api
  AddCart_Api(){
      let products=this.cartProduct_arr.map(item=>{
        return {productId:item.items.id , quantity:item.quantity}
      })

      let model ={
        userId:5, // بيجي من اللوجين
        date:new Date(),
        products:products
      }

      this.CartsService.Add_New_Cart(model).subscribe(res => {
        this.AddToCartSuccess=true
        console.log(res)
      });

  }
}
