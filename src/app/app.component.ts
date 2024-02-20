import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable ,delay } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
  cities = ['dubai', 'london', 'San Fransico', 'California', 'San Jose', '']
  city= this.cities[4];
  response:any;
  message= '';
 
 path = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    
  constructor(private http: HttpClient) {}

  async getWeatherForCity(){
    this.message = 'Fetching...';
    this.response='-------';
    this.response = await this.http.get(this.path).pipe(delay(2000)).toPromise();
    this.message = 'Finished';
  }


}
