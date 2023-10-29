import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { Title3Component } from './title3/title3.component';
import { ButtonComponent } from './button/button.component';
import { SolicitacaoCardComponent } from './solicitacao-card/solicitacao-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputRadioComponent,
    Title3Component,
    ButtonComponent,
    SolicitacaoCardComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    Title3Component,
    ButtonComponent,
    InputRadioComponent,
    SolicitacaoCardComponent,
  ],
})
export class ComponentsModule {}
