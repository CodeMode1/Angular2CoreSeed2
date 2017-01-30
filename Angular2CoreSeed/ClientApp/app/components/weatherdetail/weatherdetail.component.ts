import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather/weather';


@Component({
    selector: 'weatherdetail',
    template: require('./weatherdetail.component.html')
})

export class WeatherDetailComponent{
    name: string;
    private sub: any;
    weather: Weather;
    public messageDetails: string;

    constructor(private _weatherService: WeatherService, private _route: ActivatedRoute) {
        this.name = "";
        this.messageDetails = "";
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            if (params['name'] != null || params['name'] != undefined) {
                this.name = params['name'];
                this.getDetailsByName(this.name);
            } 
            else {
                this.messageDetails = "Aucuns détails à afficher";
            }           
        });      
    }

    getDetailsByName(name: string) {
        // call getDetails method in the nservice
        this._weatherService.getWeatherByNameAPI(name)
            .subscribe(
                result => {
                    console.log("this is the weather by name : " + JSON.stringify(result));
                    this.weather = result;
                }
            );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}