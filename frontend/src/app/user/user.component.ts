import { Component, OnInit } from '@angular/core';
import User from '../datatypes/user';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
    });
  }

  deleteUser(id: string) {
    const ok = confirm('Are you sure you want to delete this user?');
    if (ok) {
      this.userService.deleteUser(id).subscribe((result) => {
        alert('User Deleted Successfully');
        this.users = this.users.filter((user) => user._id != id);
      });
    }
  }
}
