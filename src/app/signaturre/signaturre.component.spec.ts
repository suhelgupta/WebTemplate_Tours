import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturreComponent } from './signaturre.component';

describe('SignaturreComponent', () => {
  let component: SignaturreComponent;
  let fixture: ComponentFixture<SignaturreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignaturreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignaturreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
