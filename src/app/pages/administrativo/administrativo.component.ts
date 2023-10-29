import { Component, OnInit } from '@angular/core';
import { AdministrativoService } from '@services/administrativo.service';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.scss'],
})
export class AdministrativoComponent implements OnInit {
  solicitacoes: any[] = [];
  filtro: string = 'Todos';

  constructor(private readonly service: AdministrativoService) {}

  filtrarPorStatus() {
    if (this.filtro === 'Todos') {
      this.listarTodasSolicitacoes();
      return;
    }
    this.service.buscarSolicitacoes().subscribe((res: any) => {
      this.solicitacoes = res.filter(
        (item: any) => item.aprovacao === this.filtro
      );
    });
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
