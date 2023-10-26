import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, SolicitacaoComponent, AdministracaoComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, SolicitacaoComponent, AdministracaoComponent],
})
export class PagesModule {}
