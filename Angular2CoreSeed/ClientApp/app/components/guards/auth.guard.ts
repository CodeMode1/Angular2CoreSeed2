import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private LoginService: LoginService) {
    }

    canActivate() {
        if (this.LoginService.token != null && typeof(this.LoginService.token != "undefined")) {
            // logged in so return true
            console.log("guard : " + this.LoginService.token);
            return true;
        }
        console.log("guard " + this.LoginService.token);
        // not logged in so redirect to login page
        this._router.navigateByUrl("/login");
        return false;
    }
}