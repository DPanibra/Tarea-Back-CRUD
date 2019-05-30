import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { WachimanService } from './services/wachiman.service';
import { Wachiman2Service } from './services/wachiman2.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
   // canActivate:[Wachiman2Service]
  },
  {
    path: 'logged',
    loadChildren: './logged/logged.module#LoggedModule',
  // canActivate:[WachimanService]
  }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }