import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrefechaComponent } from './abrefecha.component';

describe('AbrefechaComponent', () => {
  let component: AbrefechaComponent;
  let fixture: ComponentFixture<AbrefechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrefechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrefechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
