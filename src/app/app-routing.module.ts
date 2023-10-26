import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracaoComponent } from '@pages/administracao/administracao.component';
import { HomeComponent } from '@pages/home/home.component';
import { SolicitacaoComponent } from '@pages/solicitacao/solicitacao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'solicitante',
    component: SolicitacaoComponent,
  },
  {
    path: 'almoxarife',
    component: SolicitacaoComponent,
  },
  {
    path: 'administracao',
    component: AdministracaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
