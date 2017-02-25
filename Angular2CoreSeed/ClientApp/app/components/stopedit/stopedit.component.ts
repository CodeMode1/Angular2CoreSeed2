import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailService } from '../tripdetail/tripdetail.service';
import { LoginService } from '../login/login.service';
import { StopService } from '../stop/stop.service';
import { Subscription } from 'rxjs/Subscription';
import { ITrip, Trip } from '../trip/trip';
import { IStop, Stop } from '../stop/stop';

@Component({
    selector: 'stop-edit',
    template: require('./stopedit.component.html'),
    styles: [require('./stopedit.component.css')]
})

export class EditStopComponent {
    private sub: any;
    public selectedTrip: Trip;
    public inputDelete: boolean;
    public inputIdDelete: number;
    public objectName: string;
    public showPopUp: boolean;
    public isAdmin: boolean;
    public toggleText: string;
    constructor(public _activatedRoute: ActivatedRoute,
        public _tripdetail: TripDetailService, public _router: Router,
        public _stopService: StopService, public _loginService: LoginService) {
        this.inputDelete = false;
        this.inputIdDelete = null;
        this.objectName = "";
        this.toggleText = "Show";
        this.isAdmin = this._loginService.estAdmin;
    }

    ngOnInit() {
        this.sub = this._activatedRoute.parent.params.subscribe(
            params => {
                if (params['id'] != null && params['id'] != undefined) {
                    var id = +params['id'];
                    this.getStopsById(id);
                } else {
                    this._router.navigateByUrl("/trips/" + id);
                }
            }
        );
    }

    //  POP UP NOT WORKIN?! test in another project
    onTogglePopUp(id: number): void {
        for (var i = 0; i < this.selectedTrip.stops.length; i++) {
            if (this.selectedTrip.stops[i].id == id) {
                this.selectedTrip.stops[i].showPopUp = !this.selectedTrip.stops[i].showPopUp;
                this.toggleText = this.showPopUp ? "Hidе" : "Show";
            }
        }
    }

    getStopsById(id: number): Subscription {
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
                },
                error => {
                    console.log("error get back trip with id : " + id + error);
                }
            );
    }

    //  ajouter une temeprature pour ce stop
    ajouteTemp(id: number): void {
        this._router.navigateByUrl("/weathers/" + id);
    }

    // delete stop by its id
    deleteStop(id: number) {
        this.inputDelete = true;
        console.log("in go delete : " + id);
        this.inputIdDelete = id;
        this.objectName = "stopAdmin";
    }

    // refresh the results after the child component has emitted the deletion was successfull.
    refreshResults($event) {
        if ($event == true) {
            // refresh the display list after deleting a stop.
            this.getStopsById(this.selectedTrip.id);
        } 
        this.objectName = "";
        this.inputDelete = false;
    }
}