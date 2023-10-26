import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss'],
})
export class SolicitacaoComponent implements OnInit {
  actor: string = '';

  ngOnInit(): void {
    this.actor = window.location.pathname.replace(/\//, '');
  }
}
