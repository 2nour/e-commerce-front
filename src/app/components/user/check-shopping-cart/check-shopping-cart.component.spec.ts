import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckShoppingCartComponent } from './check-shopping-cart.component';

describe('CheckShoppingCartComponent', () => {
  let component: CheckShoppingCartComponent;
  let fixture: ComponentFixture<CheckShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
