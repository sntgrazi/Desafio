import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'inicial', component: TelaInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
