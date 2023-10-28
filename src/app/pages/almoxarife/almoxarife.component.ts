import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlmoxarifeService } from '@services/almoxarife.service';
import { catchError, switchMap } from 'rxjs';

@Component({
  selector: 'app-almoxarife',
  templateUrl: './almoxarife.component.html',
  styleUrls: ['./almoxarife.component.scss'],
})
export class AlmoxarifeComponent implements OnInit {
  solicitacoes: any[] = [];

  constructor(
    private readonly service: AlmoxarifeService,
    private readonly: Router
  ) {}

  voltarPaginaAnterior() {
    window.history.back();
  }

  ngOnInit(): void {
    this.service
      .listarPendencias()
      .pipe(
        switchMap((res: any) => {
          this.solicitacoes = [...res];
          return res;
        }),
        catchError((err: any) => {
          console.error(err);
          return err;
        })
      )
      .subscribe();
  }
}
