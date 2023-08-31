
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://localhost:7105/api/";

  getUsers() {
    return this.http.get<any>(`${this.baseUrl}Users`);
  }

  getUserById(id: number) { 
    return this.http.get<User>(`${this.baseUrl}Users/`+ id);
  }

  saveUser(user: User) {
    return this.http.post<User>(`${this.baseUrl}Users`, user);
  }

  editUser(id:number, user: User) {
    return this.http.put<User>(`${this.baseUrl}Users/` + id, user);
  }

  login(user: any) {
    return this.http.post<any>(`${this.baseUrl}login`, user);
  }
}
