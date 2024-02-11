import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  refreshPage(): void {
    location.reload();
  }

  ngOnInit()
  {

  }

  items = [
    { name: 'Item 1', description: 'Description for Item 1' },
    { name: 'Item 2', description: 'Description for Item 2' },
    { name: 'Item 3', description: 'Description for Item 3' },
    // Fügen Sie weitere Beispielelemente hinzu, falls erforderlich
  ];
}
