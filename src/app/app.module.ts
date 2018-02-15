import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './material/material.module';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';
import { HttpClientModule } from '@angular/common/http';

/* imports */
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { LazyLoadImageModule } from 'ng-lazyload-image';

/* providers */
import { MatchInputsValidation } from './shared/matchPassword';
import { UsersService } from './users/users.service';

/* declarations */
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserNewComponent } from './user-new/user-new.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { InputErrorMsgComponent } from './components/input-error-msg/input-error-msg.component';
import { firstLetterUppercase } from './shared/first-letter-uppercase.pipe';
import { HighlightMeDirective } from './shared/highlight-me.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    UsersComponent,
    UserDetailsComponent,
    UserNewComponent,
    TextareaComponent,
    UserFormComponent,
    SearchInputComponent,
    InputErrorMsgComponent,
    firstLetterUppercase,
    HighlightMeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FancyImageUploaderModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [MatchInputsValidation, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
