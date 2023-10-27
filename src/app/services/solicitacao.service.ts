import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolicitacaoType } from '../types/Solicitacao.type';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoService {
  private API_URL: string = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) {}

  criarSolicitacao(solicitacao: SolicitacaoType) {
    return this.http.post(`${this.API_URL}/solicitacao`, solicitacao);
  }
}
