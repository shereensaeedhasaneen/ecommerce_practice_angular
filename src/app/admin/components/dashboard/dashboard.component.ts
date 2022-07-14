import { ProductService } from './../../../products/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/models/iproduct';
import { IDashboard } from '../../model/idashboard';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cartProduct_arr:any;
  form!:FormGroup;
  detailsModal:any={}
  detailsProducts:any[]=[];
  constructor(private DashboardService:DashboardService , private ProductService:ProductService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
        startDate:new FormControl(''),
        endDate : new FormControl('')
    })
    this.getAllCart()
  }

  getAllCart(){
    //this.cartProduct_arr = this.DashboardService.getAllCart()
      this.DashboardService.getAllCartDefault().subscribe((res:any)=>{
        console.log(res)
        this.cartProduct_arr=res
      })
  }

  ApplyFilterWithDate(){
    console.log(this.form.value)
    let date = this.form.value;

    this.DashboardService.getAllCart(date).subscribe((res:any)=>{
      console.log(res)
      this.cartProduct_arr=res
    })
  }

  delete_Product(id:number){
      console.log(id)

    this.DashboardService.deleteCart(id).subscribe((res:any)=>{
      alert('cart delete product id  =  ' +id)
      this.getAllCart()
    })
  }

  view(index:number){
    this.detailsProducts=[]
    this.detailsModal=this.cartProduct_arr[index]
    for(let x in this.detailsModal.products){
        this.ProductService.getProductDetailsByID(this.detailsModal.products[x].productId).subscribe((res:any)=>{
          this.detailsProducts.push({items:res , quantity: this.detailsModal.quantity})
        })
        console.log(this.detailsProducts)
    }
  }
}
