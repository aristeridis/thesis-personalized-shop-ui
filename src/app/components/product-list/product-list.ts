import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { InteractionService } from '../../services/interaction';
import { InteractionRequest } from '../../models/interaction-request';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  private productService = inject(ProductService);
  private interactionService = inject(InteractionService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Τα προϊόντα φορτώθηκαν επιτυχώς:', this.products);
      },
      error: (error) => {
        console.error('Υπήρξε σφάλμα κατά τη φόρτωση των προϊόντων:', error);
      }
    });
  }
  addToCart(productId: number | undefined) {
    if (!productId) return;

    const request: InteractionRequest = {
      userId: 1,
      productId: productId,
      interactionType: 'CART'
    };

    this.interactionService.recordInteraction(request).subscribe({
      next: (response) => {
        console.log('Επιτυχής καταγραφή προϊόντων στο backend!', response);
        alert('Το προϊόν προστέθηκε στο καλάθι!');
      },
      error: (error) => {
        console.error('Σφάλμα κατά την καταγραφή προϊόντων:', error);
      }
    });
  }
}