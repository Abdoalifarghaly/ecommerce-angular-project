import { Component, NgModule } from '@angular/core';
import { ServicesService } from '../../core/service/services.service';
import { Iproduct } from '../../core/interface/Iproduct';
import { HttpClientModule } from '@angular/common/http';
import { NewPipe } from '../../pipe/new.pipe';
import { ScalefotoDirective } from '../../directive/scalefoto.directive';
import { PopularPipe } from '../../pipe/popular.pipe';
import { DiscountpricePipe } from '../../pipe/discountprice.pipe';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-home',
  imports: [NewPipe,ScalefotoDirective,PopularPipe,DiscountpricePipe,RouterModule,CommonModule,SpinnerComponent],
  providers:[ServicesService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isloading:boolean=false
  iproduct:Iproduct[]=[]
  selectedCategory:string="All"
    filteredData: Iproduct[] = []; // البيانات بعد التصنيف
  currentPage: number = 1; // الصفحة الحالية
  itemsPerPage: number = 18; // عدد العناصر لكل صفحة
  isAppear:boolean=false
  constructor(private servr:ServicesService){}
  ngOnInit(): void {
   this.getAll()
    
  }

  getAll(){
    this.isloading=true
this.servr.getAllProduct().subscribe((res) => {
  this.iproduct = res.products;
  this.filterData()
  this.isloading=false

});
  }
  
  // دالة لتصفية البيانات بناءً على الفئة المحددة
  filterData() {
    if (this.selectedCategory === 'All') {
      this.filteredData = this.iproduct;
    } else {
      this.filteredData = this.iproduct.filter((p) => p.category === this.selectedCategory);
    }
    this.currentPage = 1; // إعادة تعيين الصفحة الحالية عند تغيير الفئة
  }

  // دالة للحصول على البيانات الخاصة بالصفحة الحالية
  getPaginatedData(): Iproduct[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredData.slice(start, end);
  }

  // دالة للانتقال إلى الصفحة التالية
  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  // دالة للعودة إلى الصفحة السابقة
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // دالة لحساب إجمالي عدد الصفحات
  totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

}
