import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather, IWeather } from './weather';
import { WeatherFormComponent } from '../weatherform/weatherform.component';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from './weather.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'weather',
    template: require('./weather.component.html')
})
export class WeatherComponent implements OnInit {
    public weathers: Weather[];
    public weather1: Weather;
    public showForm: boolean;
    public titreWeather: string;

    constructor(private _http: Http, private _route: ActivatedRoute, private _weatherService: WeatherService) {
        this.titreWeather = "Weather Check";
        this.showForm = false;
        // class weather object to bind to.
        this.weather1 = new Weather(1, "HotWeather", new Date(2017, 0, 27));
        console.log(this.weather1.date);
    }

    ngOnInit(): void {

        // Method to get weather objects
        this.getAllWeathers();        
    }

    // GET : all weather objects from db
    getAllWeathers(){
        this._weatherService
            .getAllWeathersAPI()
            .subscribe(
                data => {
                    console.log("Get all weather objets : " + JSON.stringify(data));
                    this.weathers = data;
                },
                error => {
                    console.log("Erreur du serveur :  " + error);
                }
            );
    }

    showWeatherForm() {
        this.showForm = !this.showForm;
        console.log(this.showForm);
    }

    // take a js object  (usually object or array) convert it to JSON string notation
    // to get JSON object use parse method
    get diagnostic(): string {
        return JSON.stringify(this.weather1);
    }

    // Get the payload weather object from children component weatherform
    postWeather($event){
        this.weather1 = $event;
        console.log("new weather to post : ");
        console.log(this.weather1);

        // Method to save new weather object
        this.saveWeather(this.weather1);
    }

    // POST : call the post action on backend to create new weather object.
    saveWeather(weather: Weather): Subscription{

        return this._weatherService
            .postWeatherAPI(weather)
            .subscribe(
            data => {
                    this.weather1 = data;
                    console.log("saved new weather : ");
                    console.log(data);
                    // refresh the data in the browser to get he newly sabed weather object.
                    this.getAllWeathers();
                },
                error => {
                    console.log("error saving weather : " + error);
                }
            );
    }

     //routeWeather(): string {
    //    var arrayString = [];
    //    console.log(this.route.toString());
    //    this.route.url.forEach(function (elem) {
    //        arrayString.push(elem);
    //        console.log(elem);
    //        console.log(elem["0"]["path"]);
    //    });
    //    if (arrayString[1] != undefined && arrayString[1]["0"]["path"] == "at") {
    //        console.log("GOT YOU");
    //        return "Weather Check";
    //    } else {
    //        return "Welcome";
    //    }
    //}
}




