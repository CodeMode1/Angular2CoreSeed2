import { Component, OnInit } from '@angular/core';
import { ITrip, Trip } from './trip';
import { TripService } from './trip.service';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from '../login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'trip',
    template: require('./trip.component.html'),
    styles: [require('./trip.component.css')]
})

export class TripComponent {
    public trips: Trip[];
    public titreTrip: string;
    public userName: string;
    public showPopUp: boolean;
    public showPopUpId: boolean;
    public reqTrips: boolean;
    public searchMessage: string;

    constructor(public _tripService: TripService, private _loginService: LoginService,
        private _activatedRoute: ActivatedRoute, private _router: Router) {
        this.titreTrip = "Les Forfaits Voyages";
        this.trips = [];
        this.showPopUp = false;
        this.showPopUpId = false;
        this.reqTrips = false;
        this.searchMessage = "Chercher";
        if (this._loginService.userName != null && typeof (this._loginService.userName) != "undefined") {
            this.userName = this._loginService.userName;
        } else {
            this.userName = "";
        }
    }

    ngOnInit() {
        this.getAllTrips();
    }

    home() {
        this._router.navigateByUrl('/home');
    }

    clickRating($event) {
        console.log($event);
        this.showPopUp = !this.showPopUp;
    }

    searchTripId(input: any) {
        var id = input.value;
        if (id == "" || id == null || typeof(id) == 'undefined' || isNaN(+id)) {
            this.searchMessage = "Invalide";
            console.log("pas un nombre");
        } else {
            this.searchMessage = "Ok";
            console.log("ok est un nombre");
            var idToSearch = +id;
            console.log(idToSearch);
            this._tripService.getTripByIdAPI(idToSearch)
                .subscribe(
                    data => {
                        console.log("redirect to detail of this particular trip by id");
                        this._router.navigateByUrl("/trips/" + data.id);
                    },
                    error => {
                        input.style.backgroundColor = "#ff6b58";
                        input.value = "Impossible de trouver";
                        console.log("error getting trip by id : " + error);
                    }
                );
        }
        input.value = "";   
    }

    refreshTrips(): void {
        console.log("refresh trips");
        this.getAllTrips();
    }

    onToggleIdPopUp(): void {
        this.showPopUpId = !this.showPopUpId;
    }

    //  get methos sur service.
    getAllTrips(): void {
            this.reqTrips = true;
            this._tripService.getAllTripsAPI()
            .subscribe(
                data => {
                    console.log("succes get trips from service : " + JSON.stringify(data));
                    this.trips = data;
                    this.reqTrips = false;
                },
                error => {
                    console.log("error getting trips from service : " + error);
                    this.reqTrips = false;
                }
            );
    }

    deleteTrip(trip: Trip): void {
        this._tripService.deleteTripByAdmin(trip)
            .subscribe(
                data => {
                    // supprimer le trip côté client pour actualiser la vue.
                    this.trips.splice(this.trips.indexOf(trip), 1);
                    console.log("succes deleting a trip by SuperUsers");
                },
                error => {
                    console.log("error trying delete trip by SuperUsers");
                }
            );
    }
}