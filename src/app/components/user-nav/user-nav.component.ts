import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataUserService } from '../../core/service/data-user.service';
import { CartService } from '../../core/service/cart.service';

@Component({
  selector: 'app-user-nav',
  imports: [RouterModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {
  menuOpen=false
  userName:string=''
  constructor(private router:Router,private userData:DataUserService,public cart:CartService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getname()
  }
  
toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    // هنا تحط منطق تسجيل الخروج (مثلاً حذف التوكن)
    localStorage.removeItem('token');
    localStorage.removeItem('username')

    // يروح على صفحة تسجيل الدخول
    this.router.navigate(['/login']);
  }
  getname(){
    this.userData.username.subscribe((next)=>this.userName=next)
  }
}
