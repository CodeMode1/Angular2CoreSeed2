import { Injectable, OnInit } from '@angular/core';
import { Weather, IWeather } from '../weather/weather';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Constraint, IConstraint } from './weatherconstraint';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherConstraintsService {

    constructor(private _http: Http) {
    }

    getConstraintsAPI(id: number): Observable<any[]> {
        return this._http.get('api/weather/' + id + '/constraints')
            .map((resp: Response) => <IConstraint[]>resp.json())
            .catch((error: any) => <any>error.json())
    }
}