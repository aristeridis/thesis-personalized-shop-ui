import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { InteractionService } from '../../services/interaction';
import { InteractionRequest } from '../../models/interaction-request';
import { RecommendationListComponent } from '../recommendation-list/recommendation-list';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RecommendationListComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  cartService = inject(CartService);
  interactionService = inject(InteractionService);

  checkout() {
    const items = this.cartService.getItems();
    if (items.length === 0) {
      alert('Το καλάθι σας είναι άδειο!');
      return;
    }

    items.forEach(item => {
      if (item.id) {
        const request: InteractionRequest = {
          userId: 1,
          productId: item.id,
          interactionType: 'PURCHASE'
        };
        this.interactionService.recordInteraction(request).subscribe();
      }
    });

    this.cartService.clearCart();
    alert('Η αγορά ολοκληρώθηκε με επιτυχία! Ευχαριστούμε!');
  }
}