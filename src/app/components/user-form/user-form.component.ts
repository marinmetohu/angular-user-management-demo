import { Component, OnChanges, OnInit, SimpleChange, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces';
import { assign } from 'lodash';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  @Input() user;
  @Output() submitEvent = new EventEmitter<User>();
  @Output() cancelEvent = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      name: this.fb.group({
        first: [this.user.name.first, [Validators.required, Validators.minLength(2)]],
        last: [this.user.name.last, [Validators.required, Validators.minLength(2)]],
      }),
      email: [this.user.email, [Validators.required, Validators.email, Validators.minLength(6) ]],
      description: [this.user.description, [Validators.required, Validators.maxLength(2000)]]
    });
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    assign( this.user, value);
    this.submitEvent.emit(this.user);
  }
  onCancel() {
    this.cancelEvent.emit();
  }
}
