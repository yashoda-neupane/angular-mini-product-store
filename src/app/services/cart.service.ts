import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 
 private cartItems = signal<Product[]>(this.loadCartFromLocalStorage());

 
 getCartItems() {
   return this.cartItems.asReadonly();
 }

 addToCart(product: Product) {
  this.cartItems.update(items => {
    const updatedItems = [...items, product];
    this.saveCartToLocalStorage(updatedItems); 
    return updatedItems;
  });
}

private saveCartToLocalStorage(cart: Product[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

  removeFromCart(productId: number) {
    this.cartItems.update(items => {
      const updatedItems = items.filter(item => item.id !== productId);
      this.saveCartToLocalStorage(updatedItems); 
      return updatedItems;
    });
  }

  clearCart() {
    this.cartItems.set([]);
    localStorage.removeItem('cart'); 
  }

  
  loadCartFromLocalStorage(): Product[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  getTotalItems(): number {
    return this.cartItems().length;
  }
  
  getTotalPrice(): number {
    const total = this.cartItems().reduce((total, item) => total + item.price, 0);
    return parseFloat(total.toFixed(2));
  }
}
