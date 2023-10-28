import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlmoxarifeType } from '../types/almoxarife.type';

@Injectable({
  providedIn: 'root',
})
export class AlmoxarifeService {
  private API_URL: string = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) {}

  listarPendencias() {
    return this.http.get(`${this.API_URL}/solicitacao/pendencias`);
  }

  carregarSolicitacao(id: number) {
    return this.http.get(`${this.API_URL}/solicitacao/${id}`);
  }

  aprovarOuReprovar(id: number, aprovacao: AlmoxarifeType) {
    return this.http.patch(`${this.API_URL}/solicitacao/${id}`, aprovacao);
  }
}
