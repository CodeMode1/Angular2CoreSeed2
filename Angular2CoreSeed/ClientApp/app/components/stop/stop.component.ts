import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Stop, IStop } from './stop';
import { StopService } from './stop.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'stop',
    template: require('./stop.component.html')
})

export class StopComponent {
    public message: string;
    public sub: any;
    public isCreateForm: boolean;
    public tripId: number;
    public isShowForm: boolean;
    public selectedStop: Stop;

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router,
        public _stopService: StopService) {
        this.selectedStop = new Stop(1, "Plage", new Date(), new Date(), "Montréal", 0, 0, 0);
    }

    ngOnInit() {
        //check if were not in /stop yet, jsut display a message for the user
        this._activatedRoute.params.subscribe(
            params => {
                if (params['id'] != null || params['id'] != undefined) {
                    this.message = "Créer un nouveau stop pour ce trip";
                    this.isShowForm = false;
                } else {
                    this.isShowForm = true;
                }
            }
        );

        // Get parent ActivatedRoute of this route.
        
        this.sub = this._activatedRoute.parent.params.subscribe(params => {
            this.tripId = +params["id"];
        });

        console.log("id du parent pour sauver stop : ");
        console.log(this.tripId);

    }

    onSubmit(createForm: NgForm) {
        this.selectedStop = <IStop>createForm.value;
        console.log(createForm.value);
        console.log(createForm.valid);
        this.isCreateForm = false;
        this.postStopService();
    }

    postStopService(): Subscription {
        return this._stopService.postStopByIdAPI(this.tripId, this.selectedStop)
            .subscribe(
                data => {
                    console.log("succes saved stop at trip id : " + this.tripId);
                    this.selectedStop.id = data.id;
                    this.selectedStop.name = data.name;
                    this.selectedStop.arrival = data.arrival;
                    this.selectedStop.leaving = data.leaving;
                },
                error => {
                    console.log("error cant save stop at trip id : " + this.tripId);
                }
            );
    }

    addStop() {
        this.isCreateForm = !this.isCreateForm;
        console.log(this.tripId);
    }

    ngOnDestroy() {
        console.log("on destroy");
        this.sub.unsubscribe();
    }
}