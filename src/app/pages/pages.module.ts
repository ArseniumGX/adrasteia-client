import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { AlmoxarifeComponent } from './almoxarife/almoxarife.component';
import { SolicitacaoComponent } from './almoxarife/solicitacao/solicitacao.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    SolicitanteComponent,
    AlmoxarifeComponent,
    SolicitacaoComponent,
    AdministrativoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
