import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-admin-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-product-form.html',
  styleUrl: './admin-product-form.css'
})
export class AdminProductFormComponent {
  private productService = inject(ProductService);

  newProduct: Product = {
    title: '',
    description: '',
    price: 0,
    stockQuantity: 0,
    imageUrl: ''
  };

  onSubmit() {
    if (!this.newProduct.title || this.newProduct.price <= 0) {
      alert('Παρακαλώ συμπληρώστε σωστά τον τίτλο και την τιμή.');
      return;
    }

    this.productService.addProduct(this.newProduct).subscribe({
      next: (savedProduct) => {
        alert('Τέλεια! Το προϊόν καταχωρήθηκε στη Βάση!');
        this.newProduct = { title: '', description: '', price: 0, stockQuantity: 0, imageUrl: '' };
      },
      error: (error) => {
        console.error('Σφάλμα αποθήκευσης:', error);
        alert('Υπήρξε πρόβλημα κατά την αποθήκευση.');
      }
    });
  }
}