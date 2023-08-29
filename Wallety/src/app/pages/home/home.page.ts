
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user : User = new User();
  users! : User[];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users)
      },
      error: (err) => {
        alert(err?.error.message)
      }
    });
  }

  onIonInfinite(ev: any) {
    this.getUsers();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  
  save() {
    // console.log(this.user);
    this.userService.saveUser(this.user).subscribe({
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
