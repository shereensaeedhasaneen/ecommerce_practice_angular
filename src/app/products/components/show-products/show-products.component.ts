import { IProduct } from './../../models/iproduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  products:IProduct[]=[];
  Categories:any[]=[];
  err_status:boolean=false;
  err_message:string='';
  loading:boolean=false;
  cartProduct_arr:{items:IProduct,quantity:number}[]=[];
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
   this.getAllProducts()
   this.getAllCategories();
  }

  getAllProducts(){
    this.loading=true
    this.ProductService.getAllProducts().subscribe((res:any)=>{
      console.log(res)
      this.products=res;
      this.loading=false
      },
      err=>{
        console.log(err);
        this.loading=false
        this.err_status=true;
        this.err_message=err.message
      }

    )
  }

  getAllCategories(){
    this.loading=true
    this.ProductService.getAllCategories().subscribe(
      (categories:any)=>{
          this.Categories=categories;
          this.loading=false
    })
  }

  getProductsByCategories(categoryName:string){
    this.loading=true
    this.ProductService.get_products_in_specific_category(categoryName).subscribe(
      (res:any)=>{
        this.products=res;
        this.loading=false
      }
    )
  }
  FliterProducts(event:any){
    (event.target.value=="all") ? this.getAllProducts() : this.getProductsByCategories(event.target.value)
  }

  AddToCart(productItem:any){
    console.log(productItem)
    // الكود دا هيفضل يضيف في اللوكال استوريج كل حاجه بدوس عليها فلو فيه برودكت متكرر هيضيفه تاني بردو فعشان كدا هنغير الكود دا
    /*this.cartProduct_arr.push(productItem)
    localStorage.setItem('cart' ,JSON.stringify(this.cartProduct_arr))*/

   // Note => if("cart" in localStorage) To check if this key in localstorage or not

   if("cart" in localStorage){
    //بقوله هنا سيرش في الاراي لو فيه اي ايتم ال id بتاعه نفس الid ال ضيفته تاني خزن الايتم دا في المتغير دا
    this.cartProduct_arr = JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProduct_arr.find(item=>item.items.id == productItem.items.id) // كدا المتغير دا هيكون ياما فيه داتا ياما مفيهوش
    if(exist) alert("product is Already in your car")
    else{
      this.cartProduct_arr.push(productItem)
      localStorage.setItem("cart" , JSON.stringify(this.cartProduct_arr))
    }
   }

   else{
    this.cartProduct_arr.push(productItem)
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct_arr))
   }
  }
}
