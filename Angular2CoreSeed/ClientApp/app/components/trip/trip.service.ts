import { Injectable } from '@angular/core';
import { ITrip, Trip } from './trip';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class TripService {
    private _urlTrip: string;

    constructor(public _http: Http) {
        this._urlTrip = 'api/trip';
    }

    // GET:     All trips objects.
    getAllTripsAPI(): Observable<ITrip[]> {
        return this._http.get(this._urlTrip)
            .map((response: Response) => <ITrip[]>response.json())
            .catch((error: any) => <any>error.json())
    }

    // POST:    1 trip object.
    postTripAPI(trip: Trip): Observable<ITrip> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify(trip);

        return this._http.post(this._urlTrip, body, { headers } )
            .map((response: Response) => <ITrip>response.json())
            .catch((error: any) => <any>error.json())
            
    }

}
