import { Component, input, output } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {


  // Input as a signal using the input() function
  item = input.required<Product>();

  // Output as a signal-like emitter using the output() function
  remove = output<number>();
}
