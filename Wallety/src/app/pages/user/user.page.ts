import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private userService: UserService, private Activerouter: ActivatedRoute, private router: Router) { }

  id!: number;
  user: User = new User();

  ngOnInit() {
    this.id=this.Activerouter.snapshot.params['id'];
    console.log(this.id)
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.user = data;
        console.log(this.user)
      },
      error: (err) => {
        console.log(err?.error.message)
      }
    });
  }

}
