import { Component, OnInit } from '@angular/core';
import { User, IUser } from './User';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: require('./login.component.html')
})

export class LoginComponent {
    public user: User;
    public loading: boolean;
    public error: string;

    constructor(public _loginService: LoginService, public _router: Router) {
        this.user = new User("DaphDC", "daph@daph.com", "P@ssw0rd!");
        this.loading = false;
        this.error = "";
    }

    ngOnInit() {
        // reset login status
        this._loginService.logout();
    }

    onSubmit(form: NgForm) {
        this.user = <IUser>form.value;
        //console.log(form.value);
        console.log(form.valid);
        this.loginService();
    }

    loginService() {
        this.loading = true;
        return this._loginService.loginAPI(this.user)
            .subscribe(
                data => {
                        var strippedToken = data.token;
                        console.log("succes login user " + JSON.stringify(this.user));
                        this._loginService.userName = this.user.userName;
                        this._loginService.token = strippedToken;
                        console.log("token du service : ");
                        console.log(this._loginService.token);
                        this._router.navigateByUrl("/trips");          
                },
                error => {
                    this.error = "Impossible de loguer le user : " + this.user.userName;
                    this.user.email = "";
                    this.user.password = "";
                    this.user.userName = "";
                    this.loading = false;
                    console.log("error log user  : " + this.user);
                }
            );
    }
}