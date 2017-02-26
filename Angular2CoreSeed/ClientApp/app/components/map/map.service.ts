import { Injectable } from '@angular/core';
import { IStop, Stop } from '../stop/stop';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class MapService {
    private _urlStop: string;

    constructor(private _http: Http, private _loginService: LoginService) {
        this._urlStop = 'api/stop';
    }

    // GET  : get stop by.
    getStopByIdAPI(id: number): Observable<IStop> {

        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this._loginService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this._urlStop + "/" + id, options)
            .map((response: Response) => <IStop>response.json())
            .catch((error: any) => <any>error.json())
    }

}
