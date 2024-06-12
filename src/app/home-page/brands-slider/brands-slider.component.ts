import { Component } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import { Splide } from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands-slider',
  standalone: true,
  imports: [NgxSplideModule, CommonModule],
  templateUrl: './brands-slider.component.html',
  styleUrls: ['./brands-slider.component.scss']
})
export class BrandsSliderComponent {
  options = {
    type: 'slide',
    perPage: 8,
    perMove: 1,
    drag: true,
    arrows: true,
    keyboard: false,
    pagination: false,
    grid: {
      rows: 2,
      cols: 4,
      gap: {
        row: '1rem',
        col: '1.5rem',
      },
    },
    breakpoints: {
      1024: {
        perPage: 5,
        grid: {
          rows: 2,
          cols: 3,
        },
      },
      768: {
        perPage: 4,
        grid: {
          rows: 2,
          cols: 2,
        },
      },
      600: {
        perPage: 3,
        grid: {
          rows: 2,
          cols: 2,
        },
      },
      500: {
        perPage: 2,
        grid: {
          rows: 2,
          cols: 1,
        },
      },
    },
    extensions: { Grid },
  };
}