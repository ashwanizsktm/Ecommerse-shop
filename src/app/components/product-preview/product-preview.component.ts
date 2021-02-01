import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})

export class ProductPreviewComponent implements OnInit {

  shoeProperty = [
    "Men's Running Shoe",
    "Nike Air Zoom",
    "Tempo Next%",
    "FlyEase"
  ]

  productItemImages = [
    "../../../assets/Images/running-shoe-front.png",
    "../../../assets/Images/running-shoe-all-back.png",
    "../../../assets/Images/running-shoe-back.png",
    "../../../assets/Images/running-show-side.png",
  ]

  productBtnText = [
    "us 7",
    "us 7.5",
    "us 8",
    "us 8.5",
    "us 9",
    "us 9.5",
    "us 10",
    "us 10.5",
    "us 11",
    "us 11.5",
    "us 12",
    "us 13",
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
