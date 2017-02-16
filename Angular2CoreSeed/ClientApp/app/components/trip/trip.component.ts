import { Component, OnInit } from '@angular/core';
import { ITrip, Trip } from './trip';
import { TripService } from './trip.service';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from '../login/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'trip',
    template: require('./trip.component.html'),
    styles: [require('./trip.component.css')]
})

export class TripComponent {
    public trips: Trip[];
    public titreTrip: string;
    public userName: string;

    constructor(public _tripService: TripService, private _loginService: LoginService,
        private _activatedRoute: ActivatedRoute) {
        this.titreTrip = "Les Forfaits Voyages";
        this.trips = [];
        if (this._loginService.userName != null && typeof (this._loginService.userName) != "undefined") {
            this.userName = this._loginService.userName;
        } else {
            this.userName = "";
        }
    }

    ngOnInit() {
        if (this._activatedRoute.snapshot.url[0].path == "trips") {
            this.getAllTrips();
        }
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