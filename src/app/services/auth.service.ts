import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private user = { username: 'admin', password: 'password' }; // Example credentials
  username = signal<string | null>(null);

  login(username: string, password: string): boolean {
    if (username === this.user.username && password === this.user.password) {
      this.isLoggedIn = true;
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isAuthenticated');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || localStorage.getItem('isAuthenticated') === 'true';
  }

}
