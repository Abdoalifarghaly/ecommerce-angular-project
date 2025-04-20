import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../core/interface/Iproduct';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products: Iproduct[],category:string): Iproduct[] {
    if(!products||!category ||category==="All")return products
    switch (category) {
      case 'tv':
            return products.filter((product)=>product?.category==='tv')
      case 'audio':
            return products.filter((product)=>product?.category==='audio')
      case 'laptop':
            return products.filter((product)=>product?.category==='laptop')
 case 'mobile':
            return products.filter((product)=>product?.category==='mobile')
            case 'gaming':
            return products.filter((product)=>product?.category==='gaming')
    
            case 'appliances':
            return products.filter((product)=>product?.category==='appliances')
    
    
      default:
        return products
    }
  }

}
