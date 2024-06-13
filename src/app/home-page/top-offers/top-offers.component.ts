import { Component } from '@angular/core';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { Output, EventEmitter } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';

@Component({
  selector: 'app-top-offers',
  standalone: true,
  imports: [ProductCardComponent, NgxSplideModule],
  templateUrl: './top-offers.component.html',
  styleUrl: './top-offers.component.scss'
})
export class TopOffersComponent {
  @Output() products = [{
    name: "Garnier Skin Active Micellar Cleansing Water 100 ml",
    image: "../../assets/images/products/p1.png",
    price_before: "30.94 SAR",
    price_after: "25.94 SAR",
    rating: 3,
    require_prescription: false,
  }, {
    name: "Garnier Skin Active Micellar Cleansing Water 200 ml",
    image: "../../assets/images/products/p2.png",
    price_before: "",
    price_after: "15.94 SAR",
    rating: 4,
    require_prescription: false,
  }, {
    name: "Garnier Skin Active Micellar Cleansing Water 300 ml",
    image: "../../assets/images/products/p3.png",
    price_before: "100.94 SAR",
    price_after: "80.94 SAR",
    rating: 3,
    require_prescription: true,
  }, {
    name: "Garnier Skin Active Micellar Cleansing Water 400 ml",
    image: "../../assets/images/products/p4.png",
    price_before: "300.94 SAR",
    price_after: "270.94 SAR",
    rating: 5,
    require_prescription: false,
  }, {
    name: "Garnier Skin Active Micellar Cleansing Water 500 ml",
    image: "../../assets/images/products/p5.png",
    price_before: "",
    price_after: "70.94 SAR",
    rating: 2,
    require_prescription: false,
  }];


  options = {
    type: 'slide',
    perPage: 5,
    perMove: 1,
    drag: true,
    arrows: false,
    keyboard: false,
    pagination: false,
    focus: 0,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      425: {
        perPage: 1,
      },
    },
  };
}
