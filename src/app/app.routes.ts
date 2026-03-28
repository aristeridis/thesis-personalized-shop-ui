import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form';

export const routes: Routes = [
    { path: '', component: ProductListComponent },

    { path: 'cart', component: CartComponent },

    { path: 'admin', component: AdminProductFormComponent },

    { path: '**', redirectTo: '' }
];