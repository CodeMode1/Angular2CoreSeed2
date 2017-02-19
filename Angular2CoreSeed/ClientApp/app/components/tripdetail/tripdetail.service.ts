import { Injectable } from '@angular/core';
import { ITrip, Trip } from '../trip/trip';
import { LoginService } from '../login/login.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class TripDetailService {
    private _urlTrip: string;

    constructor(private _http: Http, private _loginService: LoginService) {
        this._urlTrip = "api/trip";
    }

    // GET  : get trip by.
    getTripByIdAPI(id: number): Observable<ITrip> {

        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this._urlTrip + "/" + id, options)
            .map((response: Response) => <ITrip[]>response.json())
            .catch((error: any) => <any>error.json())
    }

    // GET:     get trips for logged in user.
    getUserTripAPI(): Observable<ITrip[]> {

        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this._urlTrip + "/user", options)
            .map((response: Response) => <ITrip[]>response.json())
            .catch((error: any) => <any>error.json())
    }

    // POST:    1 trip object.
    postTripAPI(trip: Trip): Observable<ITrip> {

        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(trip);

        return this._http.post(this._urlTrip, body, options)
            .map((response: Response) => <ITrip>response.json())
            .catch((error: any) => <any>error.json())
    }

    deleteTripAPI(trip: Trip): Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.delete(this._urlTrip + "/" + trip.id, options)
            .map((response: Response) => <any>console.log(response))
            .catch((error: any) => <any>error.json())
    }
}