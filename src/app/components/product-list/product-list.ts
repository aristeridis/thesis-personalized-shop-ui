import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';

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
}