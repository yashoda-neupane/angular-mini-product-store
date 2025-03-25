import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://fakestoreapi.com/users'; // This is to get and display  users from the fake store api when the user is logged in
  private users$;
  users;

  constructor(private http: HttpClient) {
      this.users$ = this.http.get<User[]>(this.apiUrl);
      this.users = toSignal(this.users$, { initialValue: [] });
  }

  isAuthenticated = signal(false);
    username = signal<string | null>(null);

    login(username: string, password: string): boolean {
      const user = this.users().find(
        u => u.username === username && u.password === password
      );
      if (user) {
        this.isAuthenticated.set(true);
        this.username.set(username);
        return true;
      }
      return false;
    }

    logout() {
      this.isAuthenticated.set(false);
      this.username.set(null);
    }

}
