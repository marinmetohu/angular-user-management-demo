import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatPaginatorModule
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';

@NgModule({
  exports: [
    MatPaginatorModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    ObserversModule,
    PlatformModule
  ]
})
export class CustomMaterialModule { }