import { Component } from '@angular/core';
import { AuthNavComponent } from "../../components/auth-nav/auth-nav.component";
import { AuthFooterComponent } from "../../components/auth-footer/auth-footer.component";
import { RouterOutlet } from '@angular/router';
import { AuthserviceService } from '../../core/service/authservice.service';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthNavComponent, AuthFooterComponent,RouterOutlet],
  providers:[AuthserviceService],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {
  isReady:boolean=false
  constructor(private authService:AuthserviceService){
    

  }
   ngOnInit() {
    // simulate delay (اختياري لو حبيت تنتظر حالة async)
    setTimeout(() => {
      if (!this.authService.isAuthenticated()) {
        // هنا ممكن تعمل redirect يدوي لو حبيت
      }
      this.isReady = true;
    }, 100); // ممكن تزودها لـ 100ms لو بتحصل مشاكل
  }
 
  

}
