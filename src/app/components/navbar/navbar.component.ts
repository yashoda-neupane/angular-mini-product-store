import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [PrimaryButtonComponent, RouterModule, CommonModule]
})
export class NavbarComponent {
  authService = inject(AuthService);
  cartService = inject(CartService);
  router = inject(Router);


  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}