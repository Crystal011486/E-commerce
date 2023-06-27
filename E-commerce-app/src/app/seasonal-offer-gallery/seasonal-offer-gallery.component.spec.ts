import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalOfferGalleryComponent } from './seasonal-offer-gallery.component';

describe('SeasonalOfferGalleryComponent', () => {
  let component: SeasonalOfferGalleryComponent;
  let fixture: ComponentFixture<SeasonalOfferGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonalOfferGalleryComponent]
    });
    fixture = TestBed.createComponent(SeasonalOfferGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
