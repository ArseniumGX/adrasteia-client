import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title3Component } from './title3/title3.component';
import { ButtonComponent } from './button/button.component';
import { SolicitacaoCardComponent } from './solicitacao-card/solicitacao-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Title3Component, ButtonComponent, SolicitacaoCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [Title3Component, ButtonComponent, SolicitacaoCardComponent],
})
export class ComponentsModule {}
