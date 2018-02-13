import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces';
import { assign, find, forEach, pull } from 'lodash';

@Injectable()
export class UsersService {
  configUrl = 'assets/users.json';
  data : Array<User> = [];
  private messageSource = new BehaviorSubject<Array<User>>(this.data);
  userList = this.messageSource.asObservable();
  
  constructor(private http: HttpClient) {
    this.updateUsers();
  }

  loadUsers() {
    return this.http.get(this.configUrl);
  }
 
  updateUsers(){
    this.loadUsers().subscribe( data => { 
 
      data.forEach(  (element) => {
        this.data.push(element);
      });
    });
  }

  deleteUser(user){
    pull(this.data, user)
  }
}
