import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitanteService } from '@services/solicitante.service';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { ComponentsModule } from '@components/components.module';
import { AlmoxarifeComponent } from './almoxarife/almoxarife.component';
import { TitleSolicitanteComponent } from './solicitante/title-solicitante/title-solicitante.component';
import { SolicitacaoComponent } from './almoxarife/solicitacao/solicitacao.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    AdministracaoComponent,
    SolicitanteComponent,
    AlmoxarifeComponent,
    TitleSolicitanteComponent,
    SolicitacaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule,
  ],
  exports: [HomeComponent, AdministracaoComponent],
  providers: [SolicitanteService],
})
export class PagesModule {}
