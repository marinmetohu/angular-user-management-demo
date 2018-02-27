import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginFormDialogComponent } from './components/login-form-dialog/login-form-dialog.component';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppAuthGuardService implements CanActivate {
  private isLogged = new BehaviorSubject<boolean>(false);

  constructor(private dialog: MatDialog,
              private router: Router
            ) { }

  canActivate(): Observable<boolean> {

    const dialogRef = this.dialog.open(LoginFormDialogComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
       (!!result) ? this.isLogged.next( true ) : this.router.navigate( ['login'] );
    });
    return this.isLogged;
  }

}
