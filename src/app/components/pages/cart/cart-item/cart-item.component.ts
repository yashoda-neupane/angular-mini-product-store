import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {


  // Input as a signal using the input() function
  item = input.required<Product>();
  cartService = inject(CartService);
  cartItems = this.cartService.getCartItems();
  
}
