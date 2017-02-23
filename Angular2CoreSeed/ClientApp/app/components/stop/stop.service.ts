import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

import { IStop, Stop } from './stop';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class StopService {
    private _urlStop: string;

    constructor(private _http: Http, private _loginService: LoginService) {
        this._urlStop = 'api/stop';
    }

    getHeaders() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    postStopByIdAPI(id: number, stop: Stop): Observable<IStop> {
        console.log("token du login service");
        console.log(this._loginService.token);

        let options = this.getHeaders();

        stop.cuisine = stop.cuisine["text"];

        let body = JSON.stringify(stop);
        return this._http.post(this._urlStop + "/" + id, body, options)
            .map((response: Response) => <IStop>response.json())
            .catch((error: any) => <any>error.json())
    }

    deleteStopByIdAPI(id: number): Observable<any> {
        console.log("token du login service");
        console.log(this._loginService.token);

        let options = this.getHeaders();

        return this._http.delete(this._urlStop + "/" + id, options)
            .map((response: Response) => console.log("delete stop with id : " + id))
            .catch((error: any) => <any>console.log("error delete stop " + error))
    }
}
