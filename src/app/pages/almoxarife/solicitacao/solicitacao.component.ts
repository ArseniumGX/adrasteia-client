import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlmoxarifeService } from '@services/almoxarife.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: [
    './solicitacao.component.scss',
    './solicitacao.responsive.component.scss',
  ],
})
export class SolicitacaoComponent implements OnInit {
  solicitacao: any;
  id: number = -1;
  aprovacao: string = '';
  observacao?: string;

  constructor(
    private readonly service: AlmoxarifeService,
    private readonly route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') as string);
    });
  }

  voltarPaginaAnterior() {
    window.history.back();
  }

  btnDisable(): boolean {
    if (this.aprovacao.length === 0) return true;
    else if (this.aprovacao === 'Aprovado') return false;
    else if (
      this.aprovacao === 'Reprovado' &&
      this.observacao &&
      this.observacao.length > 10
    )
      return false;
    else return true;
  }

  onSumit() {
    this.service
      .aprovarOuReprovar(this.id, {
        aprovacao: this.aprovacao,
        observacao: this.observacao,
      })
      .subscribe();
    alert(`Solicitação ${this.aprovacao}`);
    this.voltarPaginaAnterior();
  }

  ngOnInit(): void {
    this.service.carregarSolicitacao(this.id).subscribe((res) => {
      this.solicitacao = res;
    });
  }
}
