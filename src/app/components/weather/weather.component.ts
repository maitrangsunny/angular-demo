import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  txtcityname = '';
  cityName = '';
  temp = null;
  isLoading = true;
  constructor( private weatherService: WeatherService) { }

  ngOnInit() {

  }

  getWeather() {
    this.cityName = this.txtcityname;
    this.weatherService.getTemp(this.txtcityname).subscribe(data => {
        console.log(data);
        this.temp = data['main'].temp;
      });
  }

  getMessage() {


    return this.cityName === '' ? 'Enter your city name': (this.cityName + ' is now ' + this.temp);
  }
}
