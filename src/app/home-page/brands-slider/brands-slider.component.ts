import { Component } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import { Grid } from '@splidejs/splide-extension-grid'; 

@Component({
  selector: 'app-brands-slider',
  standalone: true,
  imports: [NgxSplideModule],
  templateUrl: './brands-slider.component.html',
  styleUrl: './brands-slider.component.scss'
})
export class BrandsSliderComponent {
  options = {
    perPage: 8,
    perMove: 1,
    drag: true,
    arrows: false,
    keyboard: false,
    pagination: false,
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: '1rem',
        col: '1.5rem',
      },
    },
    breakpoints: {
      1024: {
        perPage: 5,
      },
      768: {
        perPage: 4,
      },
      600: {
        perPage: 3,
      },
      500: {
        perPage: 2,
      },
    }
  }
}
