import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailService } from '../tripdetail/tripdetail.service';
import { Subscription } from 'rxjs/Subscription';
import { ITrip, Trip } from '../trip/trip';

@Component({
    selector: 'trip-detail',
    template: require('./tripuser.component.html'),
    styles: [require('./tripuser.component.css')]
})

export class TripUserComponent {
    public userMessage: string;
    public mesTrips: Trip[];
    public selectedTrip: Trip;
    public objectName: string;
    public inputDelete: boolean;

    constructor(private _activatedRoute: ActivatedRoute,
        public _tripDetailService: TripDetailService, private _router:Router) {
        this.userMessage = "";
        this.mesTrips = [];
        this.objectName = "";
        this.inputDelete = false;
        this.selectedTrip = null;
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

    deleteTrip(trip: Trip): void {
        this.selectedTrip = trip;
        this.objectName = "usertrip";
        this.inputDelete = true;        
    }

    // refresh the results after the child component has emitted the deletion was successfull.
    refreshResults($event) {
        if ($event == true) {
            // delete the weather client side :
            this.mesTrips.splice(this.mesTrips.indexOf(this.selectedTrip), 1);
            // update the list accordingly
            this.getUserTrips();
        }
        this.inputDelete = false;
        this.objectName = "";
    }
}

