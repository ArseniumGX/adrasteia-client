import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitante } from '../types/solicitante.type';

@Injectable({
  providedIn: 'root',
})
export class SolicitanteService {
  private API_URL: string = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  criarSolicitacao(solicitacao: Solicitante) {
    return this.http.post(`${this.API_URL}/solicitacao`, solicitacao);
  }
}
