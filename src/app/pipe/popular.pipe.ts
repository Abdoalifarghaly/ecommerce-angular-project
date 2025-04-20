import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../core/interface/Iproduct';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(products: Iproduct[],category:string): Iproduct[] {
    if(!products||!category ||category==="All")return products
    switch (category) {
      case 'Popular':
            return products.filter((product)=>product?.popular===true)
      case 'Cheap':
              return products.filter((product)=>product.price<=200)
      case 'Expensive':
             return products.filter((product)=>product.price>=200)
 case 'Sale':
             return products.filter((product)=>product.onSale===true)
    
      default:
        return products
    }
  }

}
