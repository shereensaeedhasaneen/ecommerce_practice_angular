import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  products:any[]=[];
  Categories:any[]=[];
  err_status:boolean=false;
  err_message:string='';
  loading:boolean=false
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
}
