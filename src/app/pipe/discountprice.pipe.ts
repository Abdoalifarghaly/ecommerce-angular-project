import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountprice'
})
export class DiscountpricePipe implements PipeTransform {

  transform(price: number, discount:number): number {
   if(!price||!discount) return price
   const discountPrice=price - (price * discount /100)
   return Math.round(discountPrice)
  }

}
