import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { passwordMatch } from '../../CrossVaildpass/confirmPass';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppAutoFocusDirective } from '../../directive/app-auto-focus.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    
    AppAutoFocusDirective
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userRegister: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService,private router:Router) {
    this.userRegister = fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPassword: ['', Validators.required]
    }, { validators: [passwordMatch()] });
  }

  get fullName() {
    return this.userRegister.get('fullName');
  }

  get email() {
    return this.userRegister.get('email');
  }

  get password() {
    return this.userRegister.get('password');
  }

  get confirmPassword() {
    return this.userRegister.get('confirmPassword');
  }

 submit() {
  if (this.userRegister.valid) {
    this.isLoading = true;

    // Simulate API call delay
    setTimeout(() => {
      this.toastr.success('Registration completed successfully ✅', 'Success');

      // تأخير الانتقال بعد عرض التوستر
      setTimeout(() => {
        this.isLoading = false;
        this.userRegister.reset();
        this.router.navigate(['/login']);
      }, 1000); // انتظار 1.5 ثانية بعد التوستر
    }, 1000); // تأخير الـ API الوهمي
  } else {
    this.toastr.error('Please check your input data ❌', 'Form Error');
  }
}
}



// submit() { الكود دا لو عند api
//   if (this.userRegister.valid) {
//     const formData = this.userRegister.value;

//     this.service.register(formData).subscribe({
//       next: (response) => {
//         console.log('API Response:', response);
//         this.toastr.success('Registration successful 🎉', 'Success');
//         this.userRegister.reset(); // إعادة تعيين النموذج بعد النجاح
//       },
//       error: (err) => {
//         console.error('API Error:', err);
//         this.toastr.error('Something went wrong while registering ❌', 'Error');
//       }
//     });

//   } else {
//     this.toastr.error('Please check your input data ❌', 'Form Error');
//   }
// }