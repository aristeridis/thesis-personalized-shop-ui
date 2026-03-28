import { Component, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { RecommendationListComponent } from './components/recommendation-list/recommendation-list';
import { CartComponent } from './components/cart/cart';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, RecommendationListComponent,CartComponent,AdminProductFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personalized-eshop-frontend');
}
