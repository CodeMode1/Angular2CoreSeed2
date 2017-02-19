import { Injectable } from '@angular/core';
import { Weather, IWeather } from './weather';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { LoginService } from '../login/login.service';

@Injectable()
export class WeatherService {
    private _urlWeather: string;

    constructor(private _http: Http, public _loginService: LoginService) {
        this._urlWeather = "api/weather";
    }

    // GET:     all weather objects
    getAllWeathersAPI(): Observable<IWeather[]> {
        return this._http.get(this._urlWeather)
            .map((response: Response) => <IWeather[]>response.json())
            .catch((error: any) => <any>error.json())
    }

    // POST:    1 weather object
    postWeatherAPI(weather: Weather): Observable<IWeather> {

        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(weather);

        return this._http.post(this._urlWeather, body, options)
            .map((response: Response) => <IWeather>response.json())
            .catch((error: any) => <any>error.json())
    }

    // PUT:     1 weather object
    putWeatherAPI(weather: Weather): Observable<IWeather> {

        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(weather);

        return this._http.put(this._urlWeather, body, options)
            .map((response: Response) => <IWeather>response.json())
            .catch((error: any) => <any>error.json())
    }

    // GET:     1 weather object by id
    getWeatherByIdAPI(id: number): Observable<IWeather> {
        return this._http.get(this._urlWeather + "/" + id)
            .map((response: Response) => <IWeather>response.json())
            .catch((error: any) => <any>error.json())
    }

    // GET:     1 weather object details by name
    getWeatherByNameAPI(name: string): Observable<IWeather> {
        return this._http.get(this._urlWeather + "/ByName/" + name)
            .map((response: Response) => <IWeather>response.json())
            .catch((error: any) => <any>error.json())
    }

    // GET:     1 weather object details by id
    deleteWeatherByIdAPI(id: number): Observable<any> {

        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.delete(this._urlWeather + "/" + id, options)
            .map((response: Response) => {
                console.log("succes delete weather, resp we get in service : ");
                console.log(response);
            })
            .catch((error: any) => <any>console.log("succes delete weather, resp we get in service : " + error))      
    }

}