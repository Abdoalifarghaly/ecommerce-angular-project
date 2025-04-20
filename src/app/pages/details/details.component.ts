import { Component } from '@angular/core';
import { ServicesService } from '../../core/service/services.service';
import { Iproduct } from '../../core/interface/Iproduct';
import { ActivatedRoute } from '@angular/router';
import { DiscountpricePipe } from '../../pipe/discountprice.pipe';
import { CartService } from '../../core/service/cart.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-details',
  imports: [DiscountpricePipe,SpinnerComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  data:Iproduct={}as Iproduct
  id:number
  isloading:boolean=false
  constructor(private serv:ServicesService,private route:ActivatedRoute,private  cart:CartService){
    this.id=Number(this.route.snapshot.paramMap.get('id'))
    
  }
  ngOnInit(): void {
    this.getById()
    
  }
  getById():void{
    this.isloading=true
    this.serv.getById(this.id).subscribe((res)=>{
      console.log('Response from API:', res);
      this.data=res.product
    this.isloading=false})
  }
  addToCart(){
    this.cart.addToCart(this.data)
alert("added to cart")
  }


}
