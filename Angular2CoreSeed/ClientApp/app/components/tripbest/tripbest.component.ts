import { Component, OnInit } from '@angular/core';
import { ITrip, Trip } from '../trip/trip';
import { TripService } from '../trip/trip.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupDescriptor, process, SortDescriptor } from '@progress/kendo-data-query';
import {
    GridComponent,
    GridDataResult,
    PageChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'best-trip',
    template: require('./tripbest.component.html'),
    styles: [require('./tripbest.component.css')]
})

export class BestTripComponent {
    public gridView: GridDataResult;
    public bestTrips: Trip[];
    public pageSize: number;
    public skip: number;
    public isTrips: boolean;
    public titleBestTrips: string;
    public hiddenColumns: string[];
    public columns: string[];
    public data: Object[];

    // paging infos
    public buttonCount: number;
    public info: boolean;
    public type: string;
    public pageSizes: boolean;
    public previousNext: boolean;

    constructor(public _tripService: TripService, private _activatedRoute: ActivatedRoute, private _router: Router) {
        this.bestTrips = [];
        this.pageSize = 5;
        this.skip = 0;
        this.hiddenColumns = [];
        this.columns = ["id"];
        this.isTrips = false;
        this.titleBestTrips = "";
        this.buttonCount = 5;
        this.info = true;
        this.type = "numeric";
        this.pageSizes = true;
        this.previousNext = true;
    }

    ngOnInit() {
        if (this._router.url == "/trips/best") {
            console.log("Clicked the routing to access best trips component in parent component trips.");
            this.titleBestTrips = "Consulter";
            this.getBestTrips();
        }
    }

    pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    loadItems() {
        this.gridView = {
            data: this.bestTrips.slice(this.skip, this.skip + this.pageSize),
            total: this.bestTrips.length
        };

    }

    restoreColumns(): void {
        this.hiddenColumns.length = 0;
    }

    hideColumn(field: string): void {
        this.hiddenColumns.push(field);
    }

    onViewTrips() {
        this.isTrips = !this.isTrips;
        console.log("click");
    }

    getBestTrips(): Subscription {
        return this._tripService.getBestTripsAPI()
            .subscribe(
            data => {
                    this.bestTrips = data;
                    this.loadItems();
                    console.log("success getting best trips : " + data);
                },
                error => {
                    console.log("Error getting best trips : " + error);
                }
            );
    }
}