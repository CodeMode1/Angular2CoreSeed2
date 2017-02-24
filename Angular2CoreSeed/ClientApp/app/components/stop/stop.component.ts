import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Stop, IStop } from './stop';
import { StopService } from './stop.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'stop',
    template: require('./stop.component.html'),
    styles: [require('./stop.component.css')]
})

export class StopComponent {
    public message: string;
    public sub: any;
    public isCreateForm: boolean;
    public tripId: number;
    public isShowForm: boolean;
    public selectedStop: Stop;
    public decimals: number;
    public min: number;
    public max: number;
    public autoCorrect: boolean;
    public cuisines: Array<{ text: string, value: number }>;
    public sourceCuisine: Array<{ text: string, value: number }>;
    public cuisine: { text: string, value: number };
    public guide: { text: string, value: number };

    public guides: Array<{ text: string, value: number }>;

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router,
        public _stopService: StopService) {
        this.decimals = 0;
        this.min = 1;
        this.max = 10;
        this.autoCorrect = true;
        this.selectedStop = new Stop(1, "Plage", new Date(), new Date(), "Montréal", this.cuisine, this.guide, 0, 0, 0, 8, false);
        // cuisine dropdown 
        this.cuisine = { text: "Italienne", value: 2 };      
        this.cuisines = [];
        this.sourceCuisine = [];
        this.sourceCuisine.push({ text: "Japonaise", value: 1 }, { text: "Italienne", value: 2 }, { text: "Suédoise", value: 3 },
            { text: "Portuguaise", value: 4 }, { text: "Africaine", value: 5 }, { text: "Allemande", value: 6 },
            { text: "Britannique", value: 7 }, { text: "Américaine", value: 8 }, { text: "Suédoise", value: 9 });

        // guide combobox
        this.guide = { text: "Guide Junior", value: 2 };
        this.guides = [];
        this.guides.push({ text: "Guide Michelin", value: 1 }, { text: "Guide Junior", value: 2 },
            { text: "Guide Senior", value: 3 }, { text: "Guide Privé", value: 4 });

        // filtering cuisines
        this.cuisines = this.sourceCuisine.slice();
    }

    ngOnInit() {
        //check if were not in /stop yet, jsut display a message for the user
        this._activatedRoute.params.subscribe(
            params => {
                if (params['id'] != null || params['id'] != undefined) {
                    this.message = "";
                    this.isShowForm = false;
                } else {
                    this.message = "Créer un nouveau stop pour ce trip";
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

    handleFilter(value) {
        this.cuisines = this.sourceCuisine.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
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
                    this.selectedStop.city = data.city;
                    this.selectedStop.cuisine = data.cuisine;
                    this.selectedStop.guide = data.guide;
                    this.selectedStop.quote = data.quote;
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