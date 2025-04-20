import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppAutoFocusDirective } from '../../directive/app-auto-focus.directive';
import { DataUserService } from '../../core/service/data-user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,AppAutoFocusDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin:FormGroup
  isLoading:boolean=false
  constructor(private fb:FormBuilder,private router:Router,private userdata:DataUserService){
    this.userLogin=fb.group({
      userName:['',[Validators.required]],
      password:['',Validators.required]
      

    })

  }
  get userName(){
    return this.userLogin.get('userName')
  }
   get password(){
    return this.userLogin.get('userName')
  }
submit() {
  if (this.userLogin.valid) {
    // 1. Store login data (e.g., token or temporary login flag)
   localStorage.setItem('token', 'dummy-token'); // ← Replace with the real token from your API
this.userdata.username.next(this.userLogin.get('userName')?.value);
    // 2. Navigate to the home or user page
    this.router.navigate(['/home']);

    // 3. Success message (optional)
    alert('Login successful!');
  } else {
    // If the form is invalid, mark all fields as touched
    this.userLogin.markAllAsTouched();

    // Show a warning message
    alert('Please complete the form correctly.');
  }
}




}
