import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

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
import { FormsComponent } from './forms/forms.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicReactiveFormComponent } from './dynamic-reactive-form/dynamic-reactive-form.component';

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
    ExponentialPipe,
    FormsComponent,
    ForbiddenNameDirective,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    DynamicReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
