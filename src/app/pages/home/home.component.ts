import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './home.component.html',
})
export class HomeComponent {

  projects = [
    {
      name: 'Currency Dashboard',
      description: 'React application showing selected currencies in real time — still in development.',
      link: 'https://currency-api-gamma.vercel.app/',
      imageSource: 'assets/moneyicon.svg'
    }
  ];

  currentYear: Number = new Date().getFullYear()
}

