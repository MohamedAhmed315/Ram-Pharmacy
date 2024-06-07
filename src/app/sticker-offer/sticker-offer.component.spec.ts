import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerOfferComponent } from './sticker-offer.component';

describe('StickerOfferComponent', () => {
  let component: StickerOfferComponent;
  let fixture: ComponentFixture<StickerOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickerOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
