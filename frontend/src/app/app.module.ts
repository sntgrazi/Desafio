import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { InputDinamicComponent } from './components/input-dinamic/input-dinamic.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffCanvasComponent } from './components/off-canvas/off-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TelaInicialComponent,
    InputDinamicComponent,
    NavbarComponent,
    OffCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
