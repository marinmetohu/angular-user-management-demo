import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginFormDialogComponent } from './components/login-form-dialog/login-form-dialog.component';
import { Observable } from 'rxjs/Observable';

import { AuthenticateService } from './shared/authenticate.service';

@Injectable()
export class AppAuthGuardService implements CanActivate {

  private dialogTriggered = false;

  constructor(private dialog: MatDialog,
              private router: Router,
              private auth: AuthenticateService
            ) { }

  openDialog(): void {
    console.log('open');
    this.dialogTriggered = true;
    const dialogRef = this.dialog.open(LoginFormDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result == null){
        this.dialogTriggered = null;
        this.dialog.closeAll();
      }
    });

  }
  canActivate(): Observable<boolean> {
    const self = this;

    return Observable.create(function (observer) {
      self.auth.isLogged.subscribe(value => {
        console.log('value', value);
        if(!value && self.dialogTriggered === false){
          self.openDialog();
        }
        else if(!value && !!self.dialogTriggered){
          self.dialog.closeAll();
          self.openDialog();
        }
        else if(!!value && self.dialogTriggered !== null){
          observer.next(true);
        }
      });
    });
  }

}
