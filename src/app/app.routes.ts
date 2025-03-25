import { Routes } from '@angular/router';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { CartComponent } from './components/pages/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent
    },

    {
        path : 'cart',
        component: CartComponent
    },
    {
        path: '**', redirectTo: '' // Redirect to home page if the URL is not found
    }
];
