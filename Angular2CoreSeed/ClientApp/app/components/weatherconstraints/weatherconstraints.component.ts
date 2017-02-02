import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { Weather, IWeather } from '../weather/weather';

@Component({
    selector: 'weather-constraints',
    template: require('./weatherconstraints.component.html')
})

export class WeatherConstraintsComponent {
    public weathers: Weather[];

    constructor(private _weatherService: WeatherService) {
        this.weathers = [];
    }

    ngOnInit() {
        this._weatherService.getAllWeathersAPI()
            .subscribe(
                data => {
                    console.log("Weathers : ");
                    console.log(data);
                    this.weathers = data;
                },
                error => {
                    console.log(error);
                }
            );
    }
}