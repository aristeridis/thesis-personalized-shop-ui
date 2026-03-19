import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}