import { Component } from '@angular/core';
import {trigger, animate, style, group, query, transition} from '@angular/animations';

import { routerTransition } from './router.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ],
})
export class AppComponent {
  title = 'app';
  showHiddenSecrets = false;
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
