import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailService } from './tripdetail.service';
import { Subscription } from 'rxjs/Subscription';
import { ITrip, Trip } from '../trip/trip';

@Component({
    selector: 'trip-detail',
    template: require('./tripdetail.component.html'),
    styles: [require('./tripdetail.component.css')]
})

export class TripDetailComponent {
    private sub: any;
    public selectedTrip: Trip;

    constructor(public _activatedRoute: ActivatedRoute,
        public _tripdetail: TripDetailService, public _router: Router) {
    }

    ngOnInit() {
        this.sub = this._activatedRoute.params.subscribe(
            params => {
                if (params['id'] != null && params['id'] != undefined) {
                    let id = +params['id'];
                    this.getTripById(id);
                } else {
                    this._router.navigateByUrl("/trips");
                }
            }
        );
    }

    getTripById(id: number): Subscription {
        return this._tripdetail.getTripByIdAPI(id)
            .subscribe(
            data => {
                this.selectedTrip = new Trip(
                    data.id,
                    data.name,
                    data.leaving,
                    data.continent,
                    data.country,
                    data.stops);
                    console.log("succes get back trip with id : " + id);
                    console.log("trip detail : " + JSON.stringify(data));
                },
                error => {
                    console.log("error get back trip with id : " + id + error );     
                }
            );
    }

    goBack() {
        this._router.navigateByUrl('/trips');
    }
}