import { Injectable } from '@angular/core';
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

    constructor(private _http: Http) {
        this._urlStop = 'api/stop';
    }

    postStopByIdAPI(id: number, stop: Stop): Observable<IStop> {
        let headers = new Headers(); 
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify(stop);
        return this._http.post(this._urlStop + "/" + id, body, { headers })
            .map((response: Response) => response.json())
            .catch((error: any) => <any>error.json())
    }
}
