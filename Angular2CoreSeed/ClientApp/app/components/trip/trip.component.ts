﻿import { Component, OnInit } from '@angular/core';
import { ITrip, Trip } from './trip';
import { TripService } from './trip.service';

@Component({
    selector: 'trip',
    template: require('./trip.component.html'),
    styles: [require('./trip.component.css')]
})

export class TripComponent {
    public trips: Trip[];
    public titreTrip: string;

    constructor(public _tripService: TripService) {
        this.titreTrip = "Les Forfaits Voyages";
        this.trips = [];
    }

    ngOnInit() {
        this.getAllTrips();
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
}