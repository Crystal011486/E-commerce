import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeGalleryComponent } from './cupcake-gallery.component';

describe('CupcakeGalleryComponent', () => {
  let component: CupcakeGalleryComponent;
  let fixture: ComponentFixture<CupcakeGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CupcakeGalleryComponent]
    });
    fixture = TestBed.createComponent(CupcakeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
