import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class WeatherService {
  constructor(private httpClient: HttpClient ){}

  getTemp(cityName: string ){
    const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=fcbd0aa604c90c92b03921c1f1d37a14&units=metric&q=' + cityName;
    return this.httpClient.get(apiUrl);
  }
}
