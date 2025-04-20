import { Injectable } from '@angular/core';
import { Iproduct } from '../interface/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart:Iproduct[]=[]

  getCart(){
    return this.cart
  }
  addToCart(product:Iproduct):void{
    const found = this.cart.find(p => p.id === product.id);
  if (found) {
    found.quantity! += 1;
  } else {
    product.quantity = 1;
    this.cart.push(product);
  }
  }
  removeCart(id: number): void {
  this.cart = this.cart.filter(p => p.id !== id);
}
  getCartCount():number{
    return this.cart.length
  }
  clearCaer():void
  {
     this.cart=[]
  }
}
