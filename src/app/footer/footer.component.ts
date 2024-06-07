import { Component } from '@angular/core';
import { StickerOfferComponent } from '../sticker-offer/sticker-offer.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [StickerOfferComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
