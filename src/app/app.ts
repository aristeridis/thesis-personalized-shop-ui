import { Component, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { RecommendationListComponent } from './components/recommendation-list/recommendation-list';
import { CartComponent } from './components/cart/cart';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, RecommendationListComponent,CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personalized-eshop-frontend');
}
