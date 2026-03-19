import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { InteractionService } from '../../services/interaction';
import { InteractionRequest } from '../../models/interaction-request';
import { CartService } from '../../services/cart';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  private productService = inject(ProductService);
  private interactionService = inject(InteractionService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
        console.log('Τα προϊόντα φορτώθηκαν επιτυχώς:', this.products);
      },
      error: (error) => {
        console.error('Υπήρξε σφάλμα κατά τη φόρτωση των προϊόντων:', error);
      }
    });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    const searchTerm = target.value.toLowerCase();
    
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  }

  addToCart(product: Product) {
    if (!product.id) return;

    this.cartService.addToCart(product);
    alert(`Το ${product.title} προστέθηκε στο καλάθι!`);

    const request: InteractionRequest = {
      userId: 1,
      productId: product.id,
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