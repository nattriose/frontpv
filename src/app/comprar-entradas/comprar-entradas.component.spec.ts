import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarEntradasComponent } from './comprar-entradas.component';

describe('ComprarEntradasComponent', () => {
  let component: ComprarEntradasComponent;
  let fixture: ComponentFixture<ComprarEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarEntradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
