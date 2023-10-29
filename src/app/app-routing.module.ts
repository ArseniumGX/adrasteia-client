import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativoComponent } from '@pages/administrativo/administrativo.component';
import { AlmoxarifeComponent } from '@pages/almoxarife/almoxarife.component';
import { SolicitacaoComponent } from '@pages/almoxarife/solicitacao/solicitacao.component';
import { HomeComponent } from '@pages/home/home.component';
import { SolicitanteComponent } from '@pages/solicitante/solicitante.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'solicitante',
    component: SolicitanteComponent,
    pathMatch: 'full',
  },
  {
    path: 'almoxarife',
    component: AlmoxarifeComponent,
    children: [
      {
        path: ':id',
        redirectTo: '/solicitacao/:id',
      },
    ],
  },
  {
    path: 'administracao',
    component: AdministrativoComponent,
  },
  {
    path: 'solicitacao/:id',
    component: SolicitacaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
