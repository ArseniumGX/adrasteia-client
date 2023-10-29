import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdministrativoService {
  private readonly API_URL: string = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  buscarSolicitacoes() {
    return this.http.get(`${this.API_URL}/solicitacao`);
  }
}
