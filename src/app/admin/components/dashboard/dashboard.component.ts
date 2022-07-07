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
  constructor(private DashboardService:DashboardService) { }

  ngOnInit(): void {
    this.getAllCart()
  }

  getAllCart(){
    this.cartProduct_arr = this.DashboardService.getAllCart()
      // this.DashboardService.getAllCart().subscribe((res:any)=>{
      //   console.log(res)
      //   this.cartProduct_arr=res
      // })
  }
}
