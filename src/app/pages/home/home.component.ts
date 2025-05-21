import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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

