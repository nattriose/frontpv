import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaunaComponent } from './fauna.component';

describe('FaunaComponent', () => {
  let component: FaunaComponent;
  let fixture: ComponentFixture<FaunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaunaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
