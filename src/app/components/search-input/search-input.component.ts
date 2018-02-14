import { Component, OnInit, SimpleChange, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces';
import { forEach } from 'lodash';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  newUserList: Array<User>;
  searchForm: FormGroup;
  searchTypes: Array<string> = ['both', 'first only', 'last only'];
  searchType: string;

  @Input() userList;
  @Input() customPlaceholder = 'Search';
  @Output() searchUsers = new EventEmitter<Array<User>>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchString: ['', [Validators.required, Validators.email, Validators.maxLength(50) ]]
    });
    this.searchType = this.searchTypes[0];
  }
  onSubmit({ value, valid }: { value: any, valid: boolean }) {

    const matchArray = [];
    forEach(this.userList, (user) => {
        const matchstr = new RegExp(value.searchString.toLowerCase());
        const firstname = user.name.first.toLowerCase();
        const lastname = user.name.last.toLowerCase();
 
        if ( this.searchType == this.searchTypes[1] ) {
          if (matchstr.test(firstname)) matchArray.push(user);
        }
        else if ( this.searchType == this.searchTypes[2]) {
          if ( matchstr.test(lastname) ) matchArray.push(user);
        }
        else {
          if ( matchstr.test(firstname) || matchstr.test(lastname) ) matchArray.push(user);
        }
    });
   
    this.searchUsers.emit(matchArray);
  }
}
