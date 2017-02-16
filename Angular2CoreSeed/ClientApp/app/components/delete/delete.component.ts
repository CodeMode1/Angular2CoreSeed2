﻿import { Component, OnInit, OnDestroy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { StopService } from '../stop/stop.service';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather/weather';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Component({
    selector: 'delete',
    template: require('./delete.component.html')
})
export class DeleteComponent {
    @Input() isDelete: boolean;
    @Input() weatherToDeleteId: number;
    @Input() objectToDelete: string;
    @Output() deleteSuccess: EventEmitter<boolean>;
    public idToDelete: number;
    public isShowDelete: boolean;
    constructor(public _weatherService: WeatherService,
        private _route: ActivatedRoute, public _stopService: StopService) {
        this.idToDelete = null;
        this.isShowDelete = false;
        this.deleteSuccess = new EventEmitter<boolean>();
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.isDelete) {
            // pop up open
            console.log("in delete : " + this.isDelete);
        }
    }

    hideNotif() {
        this.isShowDelete = false;
    }

    onDeleteData() {
        this.idToDelete = this.weatherToDeleteId;
        if (this.objectToDelete == "stopAdmin") {
            this.deleteStopById(this.idToDelete);
        } else if(this.objectToDelete == "weather") {
            this.deleterWeatherById(this.idToDelete);
        }
        return;
    }

    cancelDelete() {
        this.deleteSuccess.emit(false);
    }

    deleteStopById(id: number) {
        this._stopService.deleteStopByIdAPI(id)
            .subscribe(
                result => {
                    this.deleteSuccess.emit(true);
                    this.isShowDelete = true;
                    console.log("SUCCESS DELETE stop in delete component");
                },
                error => {
                    console.log("ERROR DELETE stop in delete component");
                }
            );
    }

    deleterWeatherById(id: number) {
        this._weatherService.deleteWeatherByIdAPI(id)
            .subscribe(
                result => {
                    this.deleteSuccess.emit(true);
                    this.isShowDelete = true;
                    console.log("SUCCESS DELETE in component");
                },
                error => {
                    console.log("ERROR DELETE in component");
                }
            );
    }

}