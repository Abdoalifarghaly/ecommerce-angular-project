import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { apiUrl } from '../apiRoot/register';
import { Iregister } from '../interface/iregister';
import { prodUrl } from '../apiRoot/register';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { 
    
}
// register(registerData:Iregister):Observable<any>{
//       return this.http.post(`${apiUrl}/api/user`,registerData)
//     }
getAllProduct():Observable<any>{
  return this.http.get(`${prodUrl}/products?limit=150`)
}
getById(id:number):Observable<any>{
  return this.http.get(`${prodUrl}/products/${id}`)
  
}

  }
