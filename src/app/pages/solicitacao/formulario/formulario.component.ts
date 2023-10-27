import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';

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

  constructor(
    private formBuild: FormBuilder,
    private readonly service: SolicitacaoService
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

    this.service.criarSolicitacao(this.formulario.value).subscribe();
  }
}
