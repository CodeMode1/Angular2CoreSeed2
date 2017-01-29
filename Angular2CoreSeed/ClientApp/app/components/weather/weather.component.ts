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
        this.weather1 = new Weather("4343", new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), new Date().getHours(), new Date().getMinutes()));
        console.log(this.weather1.date);
    }

    ngOnInit(): void {

        // Method to get weather objects
        this.getAllWeathers();        
    }

    // GET : all weather objects from db
    getAllWeathers(): Subscription{

        return this._http.get('/api/weather')
            .subscribe(
                result => {
                    this.weathers = <IWeather[]>result.json();
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
        this.saveWeather();
    }

    // POST : call the post action on backend to create new weather object.
    saveWeather(): Subscription{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify(this.weather1);

        return this._http.post('/api/weather', body, { headers: headers })
            .map((res: Response) => res.json())
            .subscribe(
                data => {
                    console.log("saved new weather : ");
                    console.log(data);
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




