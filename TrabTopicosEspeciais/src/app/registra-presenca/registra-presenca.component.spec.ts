import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraPresencaComponent } from './registra-presenca.component';

describe('RegistraPresencaComponent', () => {
  let component: RegistraPresencaComponent;
  let fixture: ComponentFixture<RegistraPresencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraPresencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraPresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
