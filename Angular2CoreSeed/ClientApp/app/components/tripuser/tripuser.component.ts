import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailService } from '../tripdetail/tripdetail.service';
import { Subscription } from 'rxjs/Subscription';
import { ITrip, Trip } from '../trip/trip';
import { IStop, Stop } from '../stop/stop';

@Component({
    selector: 'trip-detail',
    template: require('./tripuser.component.html'),
    styles: [require('./tripuser.component.css')]
})

export class TripUserComponent implements OnInit  {
    public userMessage: string;
    public mesTrips: Trip[];
    public selectedTrip: Trip;
    public objectName: string;
    public inputDelete: boolean;

    // constant for swipe action: left or right
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };


    constructor(private _activatedRoute: ActivatedRoute,
        public _tripDetailService: TripDetailService, private _router:Router) {
        this.userMessage = "";
        this.mesTrips = [];
        this.objectName = "";
        this.inputDelete = false;
        this.selectedTrip = null;
    }

    // action triggered when user swipes
    swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
        // out of range
        if (currentIndex > this.mesTrips.length || currentIndex < 0) return;

        let nextIndex = 0;

        // swipe right, next avatar
        if (action === this.SWIPE_ACTION.RIGHT) {
            const isLast = currentIndex === this.mesTrips.length - 1;
            nextIndex = isLast ? 0 : currentIndex + 1;
        }

        // swipe left, previous avatar
        if (action === this.SWIPE_ACTION.LEFT) {
            const isFirst = currentIndex === 0;
            nextIndex = isFirst ? this.mesTrips.length - 1 : currentIndex - 1;
        }

        // toggle avatar visibility
        this.mesTrips.forEach((x, i) => x.visible = (i === nextIndex));
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
                    this.mesTrips.forEach((x, i) => i > 0 ? x.visible = false : x.visible = true);
                },
                error => {
                    console.log("cant get your trips " + error);
                }
            );
    }

    addStops(id: number) {
        this._router.navigate(['/trips', id, 'edit']);
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

