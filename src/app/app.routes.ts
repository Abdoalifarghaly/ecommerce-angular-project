import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { registerGuard } from './guards/register.guard';

export const routes: Routes = [
            {path:"",redirectTo:"register",pathMatch:"full"},
    {path:'',loadComponent:()=>import("./layout/auth-layout/auth-layout.component").then((c)=>c.AuthLayoutComponent),
        children:[
            {path:"login",loadComponent:()=>import("./pages/login/login.component").then((c)=>c.LoginComponent)},
            {path:"register",loadComponent:()=>import("./pages/register/register.component").then((c)=>c.RegisterComponent),canDeactivate:[registerGuard]}
        ]
    },
    {path:"",loadComponent:()=>import("./layout/user-layout/user-layout.component").then((c)=>c.UserLayoutComponent),
       
        canActivate:[AuthGuard],children:[
            {path:"",redirectTo:"home",pathMatch:"full"},
            {path:"home",loadComponent:()=>import("./pages/home/home.component").then((c)=>c.HomeComponent)},
            {path:"cart",loadComponent:()=>import("./pages/cart/cart.component").then((c)=>c.CartComponent)},
            {path:"products",loadComponent:()=>import("./pages/products/products.component").then((c)=>c.ProductsComponent)},
            {path:"details/:id",loadComponent:()=>import("./pages/details/details.component").then((c)=>c.DetailsComponent)},
            {path:"category",loadComponent:()=>import("./pages/category/category.component").then((c)=>c.CategoryComponent)},
        ]}
];

