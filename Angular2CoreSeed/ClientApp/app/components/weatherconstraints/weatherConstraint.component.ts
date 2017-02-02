import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherConstraintsService } from './weatherconstraint.service';
import { Subscription } from 'rxjs/Subscription';
import { Constraint, IConstraint } from './weatherConstraint';

@Component({
    selector: 'weather-constraint',
    template: require('./weatherconstraint.component.html')
})


export class WeatherConstraintComponent {
    private sub: any;
    public id: number;
    public constraints: Constraint[];

    constructor(private _router: Router, private _route: ActivatedRoute, private _weatherConstraintService: WeatherConstraintsService) {

    }

    ngOnInit() {
        this.sub = this._route.params
            .subscribe(
                params => {
                    this.id = params['id'];
                    console.log(this.id);
                    this.getConstraints();
                }
            );
        
    }

    getConstraints() {
        this._weatherConstraintService
            .getConstraintsAPI(this.id)
            .subscribe(
                data => {
                    this.constraints = data;
                    console.log("Get all the constraints : " + JSON.stringify(data));
                },
                error => {
                    console.log("Erreur du serveur : " + error);
                }
            );
    }

    goBack() {
        this._router.navigateByUrl('/weatherConstraints');
    }
}