import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUsers();
    console.log("Loaded users= ", this.users);
  }

  fetchUsers() {
    this.loading = true;
    this.error = null;

    this.userService.getUsers()
      .subscribe({
        next: (users) => {
          console.log('API Response:', users); // Log the API response
          this.users = users;
          this.loading = false;
        },
        error: (err) => {
          console.error('API Error:', err);
          this.error = err.message;
          this.loading = false;
        }
      });
  }

  trackByUserId(index: number, user: User): number {
    console.log('User in trackBy:', user); // Log each user
    return user.id;
  }
}