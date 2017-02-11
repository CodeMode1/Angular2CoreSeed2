import { Injectable } from '@angular/core';
import { ITrip, Trip } from '../trip/trip';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class TripDetailService {
    private _urlTrip: string;

    constructor(private _http: Http) {
        this._urlTrip = "api/trip";
    }

    // GET  : get trip by.
    getTripByIdAPI(id: number): Observable<ITrip> {
        return this._http.get(this._urlTrip + "/" + id)
            .map((response: Response) => <ITrip[]>response.json())
            .catch((error: any) => <any>error.json())
    }
}