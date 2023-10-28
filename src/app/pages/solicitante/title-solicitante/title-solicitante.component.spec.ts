import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSolicitanteComponent } from './title-solicitante.component';

describe('TitleSolicitanteComponent', () => {
  let component: TitleSolicitanteComponent;
  let fixture: ComponentFixture<TitleSolicitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleSolicitanteComponent]
    });
    fixture = TestBed.createComponent(TitleSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
