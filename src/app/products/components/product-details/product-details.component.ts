import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products!: IProduct; // عشان ال null و ال initialization
  loading:boolean=false;
  productId_From_url:number=0;
  constructor(private ProductService:ProductService , private ActivateRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.productId_From_url = +(this.ActivateRoute.snapshot.paramMap.get('id')!); //+ to parseInt
     console.log(this.productId_From_url)
    this.getSingleProducts(this.productId_From_url)
  }

  getSingleProducts(productID:number){
    this.loading=true
    this.ProductService.getProductDetailsByID(productID).subscribe((res:any)=>{
      console.log(res)
      this.products=res;
      this.loading=false
      },
      err=>{
        console.log(err);
        this.loading=false
      }

    )
  }

}
