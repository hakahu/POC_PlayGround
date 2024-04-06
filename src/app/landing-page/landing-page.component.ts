import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  subtitles: string[] = ["Die besten Restaurants.", "Die besten Angebote.", "In deiner Nähe."];
  currentIndex: number = 0;
  currentSubtitle: string = '';
  animateSubtitle: boolean = false;

  ngOnInit() {
    this.changeSubtitle();
  }

  changeSubtitle() {
    this.animateSubtitle = false;
    setTimeout(() => {
        this.currentSubtitle = this.subtitles[this.currentIndex];
        this.animateSubtitle = true;
        this.currentIndex = (this.currentIndex + 1) % this.subtitles.length;
    }, 1);
    setInterval(() => {
        this.animateSubtitle = false;
        setTimeout(() => {
            this.currentSubtitle = this.subtitles[this.currentIndex];
            this.animateSubtitle = true;
            this.currentIndex = (this.currentIndex + 1) % this.subtitles.length;
        }, 1500);
    }, 1500);
}
  
}
