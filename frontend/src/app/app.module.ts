import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { InputDinamicComponent } from './components/input-dinamic/input-dinamic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TelaInicialComponent,
    InputDinamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
