import { Component } from '@angular/core';
import { CartService } from '../../core/service/cart.service';
import { Iproduct } from '../../core/interface/Iproduct';
import { CommonModule } from '@angular/common';
import { DiscountpricePipe } from '../../pipe/discountprice.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,DiscountpricePipe,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Iproduct[] = [];

  constructor(private cartt: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartt.getCart();
  }

  removeItem(id: number): void {
    this.cartt.removeCart(id);
    this.cart = this.cartt.getCart();
  }

  increaseQty(item: Iproduct): void {
    item.quantity! += 1;
  }

  decreaseQty(item: Iproduct): void {
    if (item.quantity! > 1) item.quantity!--;
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => {
      const discountedPrice = item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price;
      return total + discountedPrice * (item.quantity || 1);
    }, 0);
  }

  // sendToBackend(): void {
  //   const payload = {
  //     items: this.cart,
  //     total: this.getTotal(),
  //   };
  //   this.http.post('https://your-backend-api.com/checkout', payload).subscribe({
  //     next: res => alert('Sent successfully!'),
  //     error: err => alert('Error sending data!'),
  //   });
  // }
}
