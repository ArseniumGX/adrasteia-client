import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solicitacao-card',
  templateUrl: './solicitacao-card.component.html',
  styleUrls: ['./solicitacao-card.component.scss'],
})
export class SolicitacaoCardComponent {
  @Input() solicitante: string = '';
  @Input() descricao: string = '';
  @Input() preco: string = '';
  @Input() status: string = '';
  @Input() observacao?: string;
}
