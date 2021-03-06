﻿import { Component, OnInit } from '@angular/core';
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
    public isBought: boolean;
    public userTrips: Trip[];
    public isBoughtMessage: string;
    public isRefreshTrip: boolean;

    constructor(private _activatedRoute: ActivatedRoute,
        public _tripdetail: TripDetailService, private _router: Router) {
        this.isBought = false;
        this.isRefreshTrip = false;
        this.userTrips = [];
        this.isBoughtMessage = "";
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

    refreshTrip(): void {
        if (this.selectedTrip != null) {
            this.getTripById(this.selectedTrip.id);
        }    
    }

    getTripById(id: number): Subscription {
        this.isRefreshTrip = true;
        return this._tripdetail.getTripByIdAPI(id)
            .subscribe(
            data => {
                    this.selectedTrip = new Trip(
                    data.id,
                    data.name,
                    data.leaving,
                    data.continent,
                    data.country,
                    data.rating,
                    data.stops);
                    console.log("succes get back trip with id : " + id);
                    console.log("trip detail : " + JSON.stringify(data));
                    this.isRefreshTrip = false;
                    this.getTripsForUser();
                },
                error => {
                    console.log("error get back trip with id : " + id + error);
                    this.isRefreshTrip = false;     
                }
            );
    }

    getTripsForUser(): Subscription {
        return this._tripdetail.getUserTripAPI()
            .subscribe(
                data => {
                    console.log(JSON.stringify(data));
                    this.userTrips = data;
                    this.canAddTrip();
                },
                error => {
                    console.log("error get back trip for user " + error);
                }
            );
    }

    canAddTrip() {
        for (var i = 0; i < this.userTrips.length; i++) {
            if (this.userTrips[i].id == this.selectedTrip.id) {
                this.isBought = true;
                this.isBoughtMessage = "Vous avez déjà acheté ce trip";
                return;
            }
        }
    }

    buyTrip(trip: Trip): Subscription {
        return this._tripdetail.postTripAPI(trip)
            .subscribe(
            data => {
                console.log("succes creating trip : " + JSON.stringify(data));
                this.isBought = true;
                this._router.navigateByUrl("/trips/perso");
            },
            error => {
                console.log("error creating trip : " + error);
            }
        );
    }

    goBack() {
        this._router.navigateByUrl('/trips');
    }
}