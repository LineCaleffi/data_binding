import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingNg2Component } from './data-binding-ng2.component';

describe('DataBindingNg2Component', () => {
  let component: DataBindingNg2Component;
  let fixture: ComponentFixture<DataBindingNg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingNg2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingNg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
