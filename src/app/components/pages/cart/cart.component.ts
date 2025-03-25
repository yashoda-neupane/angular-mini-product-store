import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService);


  cartItems = this.cartService.getCartItems();
  totalPrice = computed(() => this.cartItems().reduce((sum, item) => sum + item.price, 0));

}
