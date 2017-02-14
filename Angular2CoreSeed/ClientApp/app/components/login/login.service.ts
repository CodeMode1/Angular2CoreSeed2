﻿import { Injectable } from '@angular/core';
import { IUser, User } from './User';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
    public token: string;
    private _urlLogin: string;

    constructor(private _http: Http) {
        this._urlLogin = 'api/auth/token';
    }

    loginAPI(user: IUser): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify(user);
        return this._http.post(this._urlLogin, body, { headers })
            .map((response: Response) => response.json())
            .catch((error: any) => <any>error.json())
    }

    logout(): void {
        this.token = null;
        console.log("logout");
        // clear token from local storage to log out user
        localStorage.removeItem('token');
        //localStorage.clear();
    }
}