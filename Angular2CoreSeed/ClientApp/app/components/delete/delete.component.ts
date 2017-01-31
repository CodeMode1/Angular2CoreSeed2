import { Component, OnInit, OnDestroy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather/weather';

@Component({
    selector: 'delete',
    template: require('./delete.component.html')
})
export class DeleteComponent {
    @Input() onDelete: boolean;
    @Input() weatherToDeleteId: number;
    @Output() deleteSuccess: EventEmitter<boolean>;
    idToDelete: number;
    constructor(private _weatherService: WeatherService, private _route: ActivatedRoute) {
        this.idToDelete = null;
        this.deleteSuccess = new EventEmitter<boolean>();
    }

    ngOnInit() {
    }

    hideDeleteNotif() {
        this.onDelete = false;
    }

    ngOnChanges() {
        if (this.onDelete) {
            this.idToDelete = this.weatherToDeleteId;
            this.deleterWeatherById(this.idToDelete);
        }
    }

    deleterWeatherById(id: number) {
        this._weatherService.deleteWeatherByIdAPI(id)
            .subscribe(
                data => {
                    this.deleteSuccess.emit(true);
                    console.log("OK, deleted the weather : " + JSON.stringify(data));
                },
                error => {
                    console.log("ERROR, cannot delete weather : " + JSON.stringify(error));
                }
            );
    }

}