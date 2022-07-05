//import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
     return this.http.get(`${environment.Base_url}products`)
  }

  getAllCategories(){
    return this.http.get(`${environment.Base_url}products/categories`)
 }

  get_products_in_specific_category(categoryName:string){
    return this.http.get(`${environment.Base_url}products/category/${categoryName}`)
  }
}
