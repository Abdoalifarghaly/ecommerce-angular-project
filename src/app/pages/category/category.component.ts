import { Component } from '@angular/core';
import { ServicesService } from '../../core/service/services.service';
import { Iproduct } from '../../core/interface/Iproduct';
import { NewPipe } from '../../pipe/new.pipe';
import { DiscountpricePipe } from '../../pipe/discountprice.pipe';
import { CategoryPipe } from '../../pipe/category.pipe';
import { Category } from '../../core/interface/category';
import { DataUserService } from '../../core/service/data-user.service';
import { ScalefotoDirective } from '../../directive/scalefoto.directive';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-category',
  imports: [NewPipe, DiscountpricePipe, CategoryPipe,ScalefotoDirective,RouterLink,SpinnerComponent],
  providers:[],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  data: Iproduct[] = []; // جميع البيانات
  filteredData: Iproduct[] = []; // البيانات بعد التصنيف
  currentPage: number = 1; // الصفحة الحالية
  itemsPerPage: number = 12; // عدد العناصر لكل صفحة
  selctCategory: string = "All"; // الفئة المحددة
username:string=''
isloading:boolean=false
  constructor(private serv: ServicesService,private user:DataUserService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.isloading=true
    this.serv.getAllProduct().subscribe((res) => {
      this.data = res.products; // تخزين جميع البيانات
      this.filterData(); // تحديث البيانات المصنفة
    this.isloading=false
    });
  }

  // دالة لتصفية البيانات بناءً على الفئة المحددة
  filterData() {
    if (this.selctCategory === 'All') {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter((p) => p.category === this.selctCategory);
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