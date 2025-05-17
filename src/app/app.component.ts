import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherforecastService } from './weatherforecast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUDApp.Client';

  // Access though this property from html

  // Assignning that value into this property
  weatherForecasts: any[] = [];

  weatherForecastService = inject(WeatherforecastService);

  // Getting Response from my Web API
  constructor(){
    this.weatherForecastService.get().subscribe(weatherForecasts => {
      this.weatherForecasts = weatherForecasts;
    });
  }
}
