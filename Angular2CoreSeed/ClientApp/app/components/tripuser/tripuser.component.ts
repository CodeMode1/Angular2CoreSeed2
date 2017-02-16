import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailService } from '../tripdetail/tripdetail.service';
import { Subscription } from 'rxjs/Subscription';
import { ITrip, Trip } from '../trip/trip';

@Component({
    selector: 'trip-detail',
    template: require('./tripuser.component.html')
})

export class TripUserComponent {
    public userMessage: string;
    public mesTrips: Trip[];

    constructor(private _activatedRoute: ActivatedRoute,
        public _tripDetailService: TripDetailService, private _router:Router) {
        this.userMessage = "";
        this.mesTrips = [];
    }

    ngOnInit() {
        this.getUserTrips();
    }

    goBack(): void {
        this._router.navigateByUrl('/trips');
    }

    getUserTrips(): Subscription {
        return this._tripDetailService.getUserTripAPI()
            .subscribe(
                data => {
                    console.log(data);
                    this.mesTrips = data;
                },
                error => {
                    console.log("cant get your trips " + error);
                }
            );
    }
}