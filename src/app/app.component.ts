import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {}
