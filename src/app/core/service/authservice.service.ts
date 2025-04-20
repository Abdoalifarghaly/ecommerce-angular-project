import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  //مهم جدا علشان localstorge مينفعش علي السيرفر
  isAuthenticated(): boolean {
    if(typeof window!=='undefined'&&window.localStorage){
 const token = localStorage.getItem('token');
    return !!token && token !== 'undefined' && token !== 'null';
    }
   return false
  }
}
