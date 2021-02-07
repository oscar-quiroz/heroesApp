import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmarComponent } from './comfirmar.component';

describe('ComfirmarComponent', () => {
  let component: ComfirmarComponent;
  let fixture: ComponentFixture<ComfirmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComfirmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
