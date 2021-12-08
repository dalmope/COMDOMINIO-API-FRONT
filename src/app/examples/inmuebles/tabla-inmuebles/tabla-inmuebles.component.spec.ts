import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInmueblesComponent } from './tabla-inmuebles.component';

describe('TablaInmueblesComponent', () => {
  let component: TablaInmueblesComponent;
  let fixture: ComponentFixture<TablaInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaInmueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
