import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakedGoodsGalleryComponent } from './baked-goods-gallery.component';

describe('BakedGoodsGalleryComponent', () => {
  let component: BakedGoodsGalleryComponent;
  let fixture: ComponentFixture<BakedGoodsGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BakedGoodsGalleryComponent]
    });
    fixture = TestBed.createComponent(BakedGoodsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
