import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { Title3Component } from './title3/title3.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [InputRadioComponent, Title3Component, ButtonComponent],
  imports: [CommonModule],
  exports: [Title3Component, ButtonComponent, InputRadioComponent],
})
export class ComponentsModule {}
