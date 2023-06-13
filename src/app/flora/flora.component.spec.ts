import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloraComponent } from './flora.component';

describe('FloraComponent', () => {
  let component: FloraComponent;
  let fixture: ComponentFixture<FloraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
