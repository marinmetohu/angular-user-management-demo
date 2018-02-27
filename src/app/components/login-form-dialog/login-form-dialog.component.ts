import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-login-form-dialog',
  templateUrl: './login-form-dialog.component.html',
  styleUrls: ['./login-form-dialog.component.scss']
})
export class LoginFormDialogComponent implements OnInit {
  username: string;
  password: string;
  isAuthenticated: boolean;

  constructor(
    public dialogRef: MatDialogRef<any>
  ) { }

  checkAuth(): boolean {
    return !!(this.username === 'test' && this.password === 'test');
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  checkCredentials(): void {
    this.dialogRef.close( this.checkAuth() );
  }

  ngOnInit() {
    this.isAuthenticated = false;
  }

}
