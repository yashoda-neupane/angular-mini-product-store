import { Routes } from '@angular/router';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

     { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    }, 
    
    { 
        path: 'login', 
        component: LoginComponent
     },

    {
        path: 'home',
        component: ProductListComponent
    },

    {
        path : 'cart',
        component: CartComponent
    },

    {
        path : 'product',
        component: AddProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**', redirectTo: '' // Redirect to home page if the URL is not found
    }
];
