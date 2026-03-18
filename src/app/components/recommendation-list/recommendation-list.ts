import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { RecommendationService } from '../../services/recommendation';

@Component({
  selector: 'app-recommendation-list',
  standalone: true,
  imports: [],
  templateUrl: './recommendation-list.html',
  styleUrl: './recommendation-list.css'
})
export class RecommendationListComponent implements OnInit {
  recommendedProducts: Product[] = [];
  private recommendationService = inject(RecommendationService);

  ngOnInit(): void {
    const userId = 1;
    this.recommendationService.getRecommendations(userId).subscribe({
      next: (data) => {
        this.recommendedProducts = data;
      },
      error: (err) => console.error('Σφάλμα φόρτωσης προτάσεων προϊόντων:', err)
    });
  }
}