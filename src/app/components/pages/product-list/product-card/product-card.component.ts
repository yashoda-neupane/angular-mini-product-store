import { Component, inject, input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { CartService } from '../../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  cartService = inject(CartService);

  product  = input.required<Product>();

}
