import { Component, OnInit } from '@angular/core';
import { Car } from 'src/models/models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  refreshPage(): void {
    location.reload();
  }

  cars: Car[] = [
    { brand: 'Toyota', year: 2022, imageUrl: 'https://scene7.toyota.eu/is/image/toyotaeurope/offer_q1_24__0030_corolla_ts:Small-Landscape?ts=1703146793064&resMode=sharp2&op_usm=1.75,0.3,2,0' },
    { brand: 'Honda', year: 2020, imageUrl: 'https://images.prismic.io/carwow/3149ba8c-1b2d-4748-a395-271995aeb87f_LHD+Honda+Civic+eHEV+2022+exterior+%288%29.jpg' },
  ]; 

  ngOnInit()
  {
    console.log(this.cars);
  }

  items = [
    { name: 'Item 1', description: 'Description for Item 1' },
    { name: 'Item 2', description: 'Description for Item 2' },
    { name: 'Item 3', description: 'Description for Item 3' },
    // Fügen Sie weitere Beispielelemente hinzu, falls erforderlich
  ];

  

}
