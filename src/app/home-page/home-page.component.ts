import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { StickerOfferComponent } from '../sticker-offer/sticker-offer.component';
import { FooterComponent } from '../footer/footer.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { BrandsSliderComponent } from './brands-slider/brands-slider.component';
import { UploadSectionComponent } from './upload-section/upload-section.component';
import { TopOffersComponent } from './top-offers/top-offers.component';
import { MidSectionComponent } from './mid-section/mid-section.component';
import { TopPurchasedComponent } from './top-purchased/top-purchased.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, StickerOfferComponent, FooterComponent, TopSectionComponent, BrandsSliderComponent, UploadSectionComponent, TopOffersComponent, MidSectionComponent, TopPurchasedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
