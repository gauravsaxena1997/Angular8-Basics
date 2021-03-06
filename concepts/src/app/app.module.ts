// Modules
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './modules/material-ui/material-ui.module';
// Components
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { ChildComponent } from './components/child/child.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleHooksChildComponent } from './components/lifecycle-hooks-child/lifecycle-hooks-child.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FormsComponent } from './components/forms/forms.component';
import { DynamicReactiveFormComponent } from './components/dynamic-reactive-form/dynamic-reactive-form.component';
import { BandListComponent } from './components/reactive-programming/band-list/band-list.component';
// Form Components
import { InputComponent } from './form-components/input.component';
import { ButtonComponent } from './form-components/button.component';
import { SelectComponent } from './form-components/select.component';
import { DateComponent } from './form-components/date.component';
import { RadiobuttonComponent } from './form-components/radiobutton.component';
import { CheckboxComponent } from './form-components/checkbox.component';
import { CreateDynamicFormComponent } from './form-components/create-dynamic-form.component';
// Directives
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
// Pipe
import { ExponentialPipe } from './components/pipes/exponential.pipe';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { DynamicTemplateDrivenFormComponent } from './components/dynamic-template-driven-form/dynamic-template-driven-form.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { ReactiveProgrammingComponent } from './components/reactive-programming/reactive-programming.component';
// Service
import {BandDataService} from './components/reactive-programming/band-data.service';
import {UserDataService} from './components/reactive-programming/user-data.service';
import { BandSearchComponent } from './components/reactive-programming/band-search/band-search.component';
import { BandCreateComponent } from './components/reactive-programming/band-create/band-create.component';
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
    CreateDynamicFormComponent,
    DynamicReactiveFormComponent,
    DynamicFormsComponent,
    DynamicTemplateDrivenFormComponent,
    AdvancedComponent,
    ReactiveProgrammingComponent,
    BandListComponent,
    BandSearchComponent,
    BandCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ],
  providers: [BandDataService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
