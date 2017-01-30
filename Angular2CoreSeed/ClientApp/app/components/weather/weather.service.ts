﻿import { Injectable } from '@angular/core';
import { Weather, IWeather } from './weather';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class WeatherService {
    private urlWeather: string;

    constructor(private _http: Http) {
        this.urlWeather = "api/weather";
    }

    // GET:     all weather objects
    getAllWeathersAPI(): Observable<IWeather[]> {
        return this._http.get(this.urlWeather)
            .map((response: Response) => <IWeather[]>response.json())
            .catch((error: Response) => <any>error.json())
    }

    // POST:    1 weather object
    postWeatherAPI(weather: Weather): Observable<IWeather> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify(weather);

        return this._http.post(this.urlWeather, body, { headers })
            .map((response: Response) => <IWeather>response.json())
            .catch((error: Response) => <any>error.json())
    }

    // PUT:     1 weather object
    putWeatherAPI(weather: Weather): Observable<IWeather> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify(weather);

        return this._http.put(this.urlWeather, body, { headers })
            .map((response: Response) => <IWeather>response.json())
            .catch((error: Response) => <any>error.json())
    }

    // GET:     1 weather object details by name
    getWeatherByNameAPI(name: string): Observable<IWeather> {
        return this._http.get(this.urlWeather + "/ByName/" + name)
            .map((response: Response) => <IWeather>response.json())
            .catch((error: Response) => <any>error.json())
    }

    // GET:     1 weather object details by id
    getWeatherByIdAPI(id: number): Observable<IWeather> {
        return this._http.get(this.urlWeather + "/" + id)
            .map((response: Response) => <IWeather>response.json())
            .catch((error: Response) => <any>error.json()) 
    }


}