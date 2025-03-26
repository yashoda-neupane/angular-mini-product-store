import { Routes } from '@angular/router';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent
     },
     { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' // Redirect to login by default
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
        component: AddProductComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '**', redirectTo: '' // Redirect to home page if the URL is not found
    }
];
