import { Injectable } from '@angular/core';
import { ITrip, Trip } from './trip';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class TripService {
    private _urlTrip: string;

    constructor(public _http: Http, private _loginService: LoginService) {
        this._urlTrip = 'api/trip';
    }

    // GET:     All trips objects.
    getAllTripsAPI(): Observable<ITrip[]> {
        console.log("token du login service");
        console.log(this._loginService.token);

        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this._urlTrip, options)
            .map((response: Response) => <ITrip[]>response.json())
            .catch((error: any) => <any>error.json())
    }

}
