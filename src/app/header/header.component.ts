import { Component } from '@angular/core';
import { StickerOfferComponent } from '../sticker-offer/sticker-offer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StickerOfferComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
