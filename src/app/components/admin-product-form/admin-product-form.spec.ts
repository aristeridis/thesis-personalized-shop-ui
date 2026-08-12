import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductFormComponent } from './admin-product-form';

describe('AdminProductForm', () => {
  let component: AdminProductFormComponent;
  let fixture: ComponentFixture<AdminProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
