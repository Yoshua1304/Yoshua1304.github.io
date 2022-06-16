import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFarmaciaComponent } from './buscarfarmacia.component';

describe('BuscarMedicamentoComponent', () => {
  let component: BuscarFarmaciaComponent;
  let fixture: ComponentFixture<BuscarFarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarFarmaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
