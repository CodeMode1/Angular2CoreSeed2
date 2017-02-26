import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})
export class AppComponent {

    constructor(private _router: Router){}

    goHome(): void {
        this._router.navigateByUrl("/home");
    }
}
