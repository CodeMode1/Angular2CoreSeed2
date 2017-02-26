import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
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
    styles: [require('./stopedit.component.css')],
    // animation metadata
    animations: [
        trigger('animStop', [
            state('inactive', style({
                transform: 'scale(1)'
            })),
            state('active', style({
                transform: 'scale(1.1, 1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('200ms 100ms ease-in')
            ])
        ])
    ]
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

    // scrollview
    public items: any[];
    public animate: boolean;
    public endless: boolean;
    public width: string;
    public height: string;

    // animations
    public state: string;
    public flyState: string;

    constructor(public _activatedRoute: ActivatedRoute,
        public _tripdetail: TripDetailService, public _router: Router,
        public _stopService: StopService, public _loginService: LoginService) {
        this.inputDelete = false;
        this.inputIdDelete = null;
        this.objectName = "";
        this.toggleText = "Show";
        this.isAdmin = this._loginService.estAdmin;

        // scrollview
        this.items = [];
        this.items.push({ title: 'Nature', url: 'http://bit.ly/2cJjYuB' }, { title: 'Excursion', url: 'http://bit.ly/2cTBNaL' },
            { title: 'Aéronautique', url: 'http://bit.ly/2cJl3Cx' });
        this.animate = true;
        this.endless = true;
        this.width = "200px";
        this.height = "200px";

        // animations
        this.state = 'inactive';
        this.flyState = 'in';
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

    toggleState(): void {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }

    animStopStarted($event): void{
        console.log($event);
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

    //  ajouter une temperature pour ce stop
    ajouteTemp(id: number): void {
        this._router.navigateByUrl("/weathers/" + id);
    }

    // voir le stop sur la map
    goMap(id: number): void {
        this._router.navigateByUrl("/map/" + id);
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