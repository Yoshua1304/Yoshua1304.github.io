import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariofarmaciaComponent } from './usuariofarmacia.component';

describe('UsuarioComponent', () => {
  let component: UsuariofarmaciaComponent;
  let fixture: ComponentFixture<UsuariofarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariofarmaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariofarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
