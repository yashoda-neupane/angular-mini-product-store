import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PrimaryButtonComponent } from "../../primary-button/primary-button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, PrimaryButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
logout() {
throw new Error('Method not implemented.');
}
navigateToCart() {
throw new Error('Method not implemented.');
}
  authService = inject(AuthService);
  router = inject(Router);

  username: string = '';
  password: string = '';
  errorMessage: string | null = null;
cartService: any;

  login() {
    console.log('Login method called with:', this.username, this.password); // Debugging
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['home']); // Redirect to dashboard or add- product page
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
