import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmoxarifeService } from '@services/almoxarife.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss'],
})
export class SolicitacaoComponent implements OnInit {
  solicitacao: any;
  id: number = -1;
  aprovacao: string = '';
  observacao?: string;

  constructor(
    private readonly service: AlmoxarifeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') as string);
    });
  }

  voltarPaginaAnterior() {
    window.history.back();
  }

  onSumit() {
    this.service
      .aprovarOuReprovar(this.id, {
        aprovacao: this.aprovacao,
        observacao: this.observacao,
      })
      .subscribe();
    this.voltarPaginaAnterior();
  }

  ngOnInit(): void {
    this.service.carregarSolicitacao(this.id).subscribe((res) => {
      this.solicitacao = res;
    });
  }
}
