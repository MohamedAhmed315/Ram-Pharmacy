import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { TopOffersComponent } from '../home-page/top-offers/top-offers.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RatingModule, FormsModule, TopOffersComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() name = '';
  @Input() price_before = '';
  @Input() price_after = '';
  @Input() rating = 0;
  @Input() image = '';
}
