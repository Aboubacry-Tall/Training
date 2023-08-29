
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  user : User = new User();

  ngOnInit() {
  }
  
  save() {
    // console.log(this.user);
    this.UserService.saveUser(this.user).subscribe({
      next: (data) => {
        this.user = data;
        console.log(this.user)
      },
      error: (err) => {
        alert(err?.error.message)
      }
    });
  }
}
