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
  @Input() userList;
  @Input() customPlaceholder = 'Search';
  @Output() submitEvent = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchString: ['', [Validators.required, Validators.email, Validators.maxLength(50) ]]
    });
  }
  onSubmit({ value, valid }: { value: any, valid: boolean }) {

    let matchArray = [];
    forEach(this.userList, (user) => {
        let matchstr = new RegExp(value.searchString);
        if(matchstr.test(user.name.first.toLowerCase())) matchArray.push(user);
    });

    this.submitEvent.emit(matchArray);
  }
}
