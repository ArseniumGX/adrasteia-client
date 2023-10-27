import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './solicitacao/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitacaoService } from '@services/solicitacao.service';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { ComponentsModule } from '@components/components.module';
import { TitleComponent } from './solicitante/title/title.component';

@NgModule({
  declarations: [
    HomeComponent,
    SolicitacaoComponent,
    AdministracaoComponent,
    FormularioComponent,
    SolicitanteComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent,
    SolicitacaoComponent,
    AdministracaoComponent,
    SolicitanteComponent,
  ],
  providers: [SolicitacaoService],
})
export class PagesModule {}
