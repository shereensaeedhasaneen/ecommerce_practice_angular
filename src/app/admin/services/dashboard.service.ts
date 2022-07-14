import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getAllCart(param?:any) { //optional
      let params = new HttpParams()
      params = params.append('startdate',param?.startDate).append('enddate' , param?.endDate)
      //عملنا ؟ عشان اول مره وهو بيجيب الداتا مش هيكون لسه اتبعتله برامترز ف دي ؟ معناها ان لو اتبعتلك برامترز خد الستارت والاند بتوعه لو متبعتلكش برامترز خلاص متاخدش حاجه
      return this.http.get(`${environment.Base_url}carts`,{params}) // {params : params} // if key name such variabe name wite it only one not need to write key
  }

  getAllCartDefault() { //optional

    return this.http.get(`${environment.Base_url}carts`) // {params : params} // if key name such variabe name wite it only one not need to write key
}

  deleteCart(id:number) {

    return this.http.delete(`${environment.Base_url}carts/${id}`)
  }
}
