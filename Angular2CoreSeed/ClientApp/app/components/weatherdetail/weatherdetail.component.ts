import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather/weather';


@Component({
    selector: 'weatherdetail',
    template: require('./weatherdetail.component.html')
})

export class WeatherDetailComponent{
    public id: number;
    private sub: any;
    weather: Weather;
    public messageDetails: string;

    constructor(private _weatherService: WeatherService, private _route: ActivatedRoute) {
        this.id = null;
        this.messageDetails = "";
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            if (params['id'] != null || params['id'] != undefined) {
                this.id = params['id'];
                this.getWeatherBydId(this.id);
            } 
            else {
                this.messageDetails = "Aucuns détails à afficher";
            }           
        });      
    }

    getWeatherBydId(id: number) {
        // call getDetails method in the nservice
        this._weatherService.getWeatherByIdAPI(id)
            .subscribe(
                result => {
                    console.log("this is the weather by id : " + JSON.stringify(result));
                    this.weather = result;
                },
                error => {
                    console.log("Cant get details by id : " + JSON.stringify(error));
                }
            );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}