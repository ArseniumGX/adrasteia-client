import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitanteService } from '@services/solicitante.service';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.scss'],
})
export class SolicitanteComponent {
  formulario: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private readonly service: SolicitanteService
  ) {
    this.formulario = this.formBuild.group({
      solicitante: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      preco: [
        '',
        [
          Validators.required,
          Validators.pattern(/^R\$ \d{1,3}(\.?\d{3})*(,\d{2})?$/),
        ],
      ],
    });
  }

  isFormValid(): boolean {
    return this.formulario.status === 'VALID';
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.service.criarSolicitacao(this.formulario.value).subscribe();
  }
}
