import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';

import { pull, map, find, each } from 'lodash';
import { trigger, state, animate, transition, style } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  userList;
  usersListDisplay;

  constructor(private Users: UsersService) { }

  ngOnInit() {

    this.Users.userList.subscribe(userList => {
      this.userList = userList;
    });
  }

  deleteUser(user): void {
    this.Users.deleteUser( user );
  }

  searchEvent($event){
 
    console.log('asdf', $event);
    each( this.userList, (el) => { 
      const obj = find($event, el);
      el.display = (!!obj) ? true : false; 
    });
  }

}