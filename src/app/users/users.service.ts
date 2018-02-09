import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { assign, find } from 'lodash';

@Injectable()
export class UsersService {

  constructor() { }
  private messageSource = new BehaviorSubject<Array<any>>(
    [{
      "id" : "1234567890",
      "name" : {
          "first" : "John",
          "last" : "Doe"
      },
      "email" : "john.doe@mail.tld",
      "picture" : "/images/awesome-avatar.png",
      "description" : "Unknown person"
    },
    {
      "id" : "1234567891",
      "name" : {
          "first" : "Alpha",
          "last" : "Beta"
      },
      "email" : "alpha.beta@mail.tld",
      "picture" : "/images/awesome-avatar.png",
      "description" : "Unknown person"
    }
  ]
  );
  userList = this.messageSource.asObservable();

}
