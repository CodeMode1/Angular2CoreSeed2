import { Component, OnInit } from '@angular/core';
import { ITrip, Trip } from './trip';
import { TripService } from './trip.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'trip',
    template: require('./trip.component.html'),
    styles: [require('./trip.component.css')]
})

export class TripComponent {
    public trips: Trip[];
    public titreTrip: string;
    public userName: string;

    constructor(public _tripService: TripService) {
        this.titreTrip = "Les Forfaits Voyages";
        this.trips = [];
        this.getAllTrips();
    }

    ngOnInit() {
        console.log(JSON.parse(localStorage.getItem('token')).userName);
        this.userName = JSON.parse(localStorage.getItem('token')).userName);
    }

    //  get methos sur service.
    getAllTrips() {
            this._tripService.getAllTripsAPI()
            .subscribe(
                data => {
                    console.log("succes get trips from service : " + JSON.stringify(data));
                    this.trips = data;
                },
                error => {
                    console.log("error getting trips from service : " + error);
                }
            );
    }

    acheterTrip(trip: Trip): Subscription {
        return this._tripService.postTripAPI(trip)
            .subscribe(
                data => {
                    console.log("succes creating trip : " + JSON.stringify(data));
                },
                error => {
                    console.log("error creating trip : " + error);
                }
            );
    }
}