import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 // Private writable signal to manage cart items
 private cartItems = signal<Product[]>([]);

 // Public readonly signal for components to subscribe to
 getCartItems() {
   return this.cartItems.asReadonly();
 }

 addToCart(product: Product) {
   this.cartItems.update(items => [...items, product]);
 }

 removeFromCart(productId: number) {
   this.cartItems.update(items => items.filter(item => item.id !== productId));
 }

 clearCart() {
   this.cartItems.set([]);
 }
}
