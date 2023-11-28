import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class authService {
    apiUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {}
  
    login(usuario:string, senha: string) {
      const credentials = { usuario: usuario, senha: senha };
      return this.http.post<any>(`${this.apiUrl}/users/login`, credentials)
        .pipe(
          tap(response => {
            console.log('Login Response:', response);
            if (response.tokenAcesso) {
              localStorage.setItem('token', response.tokenAcesso);
              localStorage.setItem('userId', response.userId.toString());
              localStorage.setItem('usuario', response.usuario);  
            } else {
              console.log('Sem token de acesso:', response);
            }
          })
        );
    }
  
    signup(usuario:string, senha: string): Observable<any> {
      const user = {  usuario: usuario, senha: senha };
      return this.http
        .post<any>(`${this.apiUrl}/users`, user)
        .pipe(
          tap((response) => {
            console.log('Cadastro:', response);
          })
        );
    }
  
    logout(): void {
      localStorage.removeItem('token');
    }

    hasAccessToken(): boolean {
      const token = localStorage.getItem('token');
      return !!token; 
    }

    
  }
