import { Component, OnInit } from '@angular/core';
import { AdministrativoService } from '@services/administrativo.service';
import { SolicitacaoType } from 'src/app/types/solicitacao.type';
@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: [
    './administrativo.component.scss',
    './administrativo.responsive.component.scss',
  ],
})
export class AdministrativoComponent implements OnInit {
  filtroPorInput: string = '';
  filtroPor: string = '';
  solicitacoes: SolicitacaoType[] = [];

  constructor(private readonly service: AdministrativoService) {}

  filtrarPorStatus(status: string) {
    if (status === 'todos') {
      this.listarTodasSolicitacoes();
      return;
    }
    this.service.buscarSolicitacoes().subscribe((res: any) => {
      this.solicitacoes = res.filter((item: SolicitacaoType) => {
        if (item.aprovacao) return item.aprovacao.toLowerCase() === status;
        else return;
      });
    });
  }

  filtrarPorSolicitanteDescricao() {
    if (this.filtroPorInput.length > 2) {
      if (this.filtroPor === 'solicitante')
        this.service.buscarSolicitacoes().subscribe((res: any) => {
          this.solicitacoes = res.filter((solicitacao: SolicitacaoType) =>
            solicitacao.solicitante.startsWith(this.filtroPorInput)
          );
        });
      else if (this.filtroPor === 'descricao')
        this.service.buscarSolicitacoes().subscribe((res: any) => {
          this.solicitacoes = res.filter((solicitacao: SolicitacaoType) =>
            solicitacao.descricao.startsWith(this.filtroPorInput)
          );
        });
    } else this.listarTodasSolicitacoes();
  }

  listarTodasSolicitacoes() {
    this.service.buscarSolicitacoes().subscribe((res: any) => {
      this.solicitacoes = res;
    });
  }

  voltarPaginaAnterior() {
    window.history.back();
  }

  ngOnInit(): void {
    this.listarTodasSolicitacoes();
  }
}
