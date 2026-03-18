import { Component, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { RecommendationListComponent } from './components/recommendation-list/recommendation-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, RecommendationListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personalized-eshop-frontend');
}
