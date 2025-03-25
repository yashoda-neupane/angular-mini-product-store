import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini-product-store';

  isAuthenticated: boolean;
  username: string;
  cartService = inject(CartService); 

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.username = this.authService.username() ?? '';
  }

  logout() {
    this.authService.logout();
  }
}
