import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { StickerOfferComponent } from '../sticker-offer/sticker-offer.component';
import { FooterComponent } from '../footer/footer.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { BrandsSliderComponent } from './brands-slider/brands-slider.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, StickerOfferComponent, FooterComponent, TopSectionComponent, BrandsSliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
