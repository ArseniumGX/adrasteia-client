import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './solicitacao/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SolicitacaoComponent,
    AdministracaoComponent,
    FormularioComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent, SolicitacaoComponent, AdministracaoComponent],
})
export class PagesModule {}
