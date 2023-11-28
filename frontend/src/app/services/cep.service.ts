import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Cep {
    cep: string;
    km: number;
  }

@Injectable({
    providedIn: 'root',
  })
  export class CepService {
    private apiUrl = 'http://localhost:3000'; 
  
    constructor(private http: HttpClient) {}
  
    getCepsInRadius(baseCep: number, baseKm: number): Observable<Cep[]> {
      return this.http.get<Cep[]>(`${this.apiUrl}/busca-cep/${baseCep}/${baseKm}`);
    }

    saveSearch(userId: number, cep: string, raioKm: number) {
      const url = `${this.apiUrl}/busca-cep/save-search`;
  
      return this.http.post<void>(url, { userId, cep, raioKm });
    }

    getHistoricoByUser(userId: number){
      const url = `${this.apiUrl}/busca-cep/byUser/${userId}`;
      return this.http.post<void[]>(url, {userId});
    }
}