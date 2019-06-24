import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ChildComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
