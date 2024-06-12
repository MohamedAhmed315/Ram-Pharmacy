import { Component } from '@angular/core';
import { ProductCardComponent } from '../../product-card/product-card.component';

@Component({
  selector: 'app-top-offers',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './top-offers.component.html',
  styleUrl: './top-offers.component.scss'
})
export class TopOffersComponent {

}
