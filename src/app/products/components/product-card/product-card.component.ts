import { IProduct } from './../../models/iproduct';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() products:IProduct={
    id:0,
    image: '',
    title: '',
    description: '',
    price: 0,
    category:'',
    rating:{rate:0,count:0}
  }
  AddButton:boolean=false;
  Quantity_number:number=0
  @Output() item=new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  AddToCart(){
    this.AddButton=false
    this.item.emit({items:this.products , quantity:this.Quantity_number})
  }
}
