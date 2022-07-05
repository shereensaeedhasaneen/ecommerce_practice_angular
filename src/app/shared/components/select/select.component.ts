import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() Select_Title:string='';
  @Input()  data:any=[];
  @Output() selectedValue = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  OnChangeSelect(event:any){
      this.selectedValue.emit(event)
  }
}
