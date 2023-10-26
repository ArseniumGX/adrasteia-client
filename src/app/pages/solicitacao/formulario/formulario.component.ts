import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  @Input() actor: string = '';

  formulario: FormGroup;

  aprovacao: string | null = null;
  observacao: string | null = null;

  constructor(private formBuild: FormBuilder) {
    this.formulario = this.formBuild.group({
      solicitante: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      preco: ['', [Validators.required]],
    });
  }

  isAlmoxarife(): boolean {
    return this.actor === 'almoxarife';
  }

  isFormValid(): boolean {
    return this.formulario.status === 'VALID';
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }
    console.info({
      formulario: this.formulario.status,
      aprovacao: this.aprovacao,
      observacao: this.observacao,
    });
  }
}
