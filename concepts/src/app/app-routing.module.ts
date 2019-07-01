import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BindingComponent} from './binding/binding.component';
import {UserInputComponent} from './user-input/user-input.component';
import {LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component';
import {CustomDirectivesComponent} from './custom-directives/custom-directives.component';
import {PipesComponent} from './pipes/pipes.component';

const routes: Routes = [
  {path:'',redirectTo:'/binding',pathMatch:'full'},
  {path:'binding',component:BindingComponent},
  {path:'userinput',component:UserInputComponent},
  {path:'lifecyclehooks',component:LifecycleHooksComponent},
  {path:'customdirectives',component:CustomDirectivesComponent},
  {path:'pipes',component:PipesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
