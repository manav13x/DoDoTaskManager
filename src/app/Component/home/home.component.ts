import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel1 : string;
  carousel2:string;
  carousel3: string;
  carousel4 : string;
  constructor() { 
    this.carousel1="assets/images/car1.jpeg";
    this.carousel2="assets/images/carousel2.jpeg";
    this.carousel3="assets/images/carousel3.jpg";
    this.carousel4="assets/images/carousel4.jpeg";
  }

  ngOnInit() {
  }

}
