import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  products:any[]=[];
  err_status:boolean=false;
  err_message:string='';
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
   this.getAllProducts()
  }

  getAllProducts(){
    this.ProductService.getAllProducts().subscribe((res:any)=>{
      console.log(res)
      this.products=res
    },
    err=>{
      console.log(err);
      this.err_status=true;
      this.err_message=err.message
    }

    )
  }
}
