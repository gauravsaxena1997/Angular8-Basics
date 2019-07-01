import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { UserInputComponent } from './user-input/user-input.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleHooksChildComponent } from './lifecycle-hooks-child/lifecycle-hooks-child.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentialPipe } from './pipes/exponential.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ChildComponent,
    UserInputComponent,
    LifecycleHooksComponent,
    LifecycleHooksChildComponent,
    HighlightDirective,
    UnlessDirective,
    CustomDirectivesComponent,
    PipesComponent,
    ExponentialPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
