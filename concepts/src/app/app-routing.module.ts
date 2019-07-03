import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BindingComponent} from './components/binding/binding.component';
import {UserInputComponent} from './components/user-input/user-input.component';
import {LifecycleHooksComponent} from './components/lifecycle-hooks/lifecycle-hooks.component';
import {CustomDirectivesComponent} from './components/custom-directives/custom-directives.component';
import {PipesComponent} from './components/pipes/pipes.component';
import {FormsComponent} from './components/forms/forms.component';
import {DynamicFormsComponent} from './components/dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  {path:'',redirectTo:'/binding',pathMatch:'full'},
  {path:'binding',component:BindingComponent},
  {path:'userinput',component:UserInputComponent},
  {path:'lifecyclehooks',component:LifecycleHooksComponent},
  {path:'customdirectives',component:CustomDirectivesComponent},
  {path:'pipes',component:PipesComponent},
  {path:'forms',component:FormsComponent},
  {path:'dynamicforms',component:DynamicFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
