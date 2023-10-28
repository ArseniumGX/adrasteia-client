import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitanteService } from '@services/solicitante.service';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { AlmoxarifeComponent } from './almoxarife/almoxarife.component';
import { SolicitacaoComponent } from './almoxarife/solicitacao/solicitacao.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    AdministracaoComponent,
    SolicitanteComponent,
    AlmoxarifeComponent,
    SolicitacaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [HomeComponent, AdministracaoComponent],
  providers: [],
})
export class PagesModule {}
