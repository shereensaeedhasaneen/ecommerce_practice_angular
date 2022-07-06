import { IProduct } from './../../models/iproduct';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

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
    price: ''
  }
  AddButton:boolean=false;
  Quantity_number:number=0
  @Output() item=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  AddToCart(){
    this.item.emit({items:this.products , quantity:this.Quantity_number})
  }
}
