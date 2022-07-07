import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  Add_New_Cart(model:any){
   return this.http.post(`${environment.Base_url}carts` , model)
  }
}
