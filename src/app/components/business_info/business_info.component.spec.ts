import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinnessInfoComponent } from './business_info.component';

describe('EmployeeComponent', () => {
  let component: BusinnessInfoComponent;
  let fixture: ComponentFixture<BusinnessInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinnessInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinnessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
