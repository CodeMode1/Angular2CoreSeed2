import { Component, OnInit, OnDestroy } from '@angular/core';
import { Stop } from '../stop/stop';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MapService } from './map.service';

declare var google;

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [require('./map.component.css')]
})
export class MapComponent implements OnInit, OnDestroy {
    private sub: any;
    public titleMap: string;
    // google maps zoom level
    public zoom: number = 8;
    public markers: marker[];
    public lat: number;
    public lng: number;
    public infoClickedStop: string;
    public selectedStop: Stop;

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _mapService: MapService) {
        this.titleMap = "Map";
        this.selectedStop = null;
        // initial center position for the map
        this.infoClickedStop = "";
        this.lat = 45.5016889;
        this.lng = -73.56725599999999;
        this.markers = [];
    }

    ngOnInit() {
        this.sub = this._activatedRoute.params.subscribe(
            params => {
                if (params['id'] != null && params['id'] != undefined) {
                    var id = +params['id'];
                    this.getStop(id);
                }
            }
        );
    }

    resetSearchStop(input: any): void {
        console.log("click");
        var empty = "";
        input.value = empty;
    }

    getStop(id: number): Subscription {
        return this._mapService.getStopByIdAPI(id)
            .subscribe(
                data => {
                    this.selectedStop = new Stop(data.id, data.name, data.arrival, data.leaving, data.city,
                        data.cuisine, data.guide, data.longitude, data.latitude, data.order, data.quote, data.showPopUp);
                    console.log("selected stop : " + this.selectedStop);
                },
                error => {
                    console.log("error cant get stop by id " + error);
                }
            );
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label + index}`)
        this.infoClickedStop = `Stop : ${label}`;
    }


    getAddress(input: any) {
        var address = input.value;
        this.getLatitudeLongitude(address, (data) => {
            console.log(data);
            this.markers.push({ lat: data.Latitude, lng: data.Longitude, label: address });
            console.log(this.markers);
        });
    }

    getLatitudeLongitude(address, callback) {
        // Si l'addresse n'est pas spécifiée default : Montreal, Canada
        address = address || 'Montreal, Canada';
        // Initialize the Geocoder
        var geocoder = new google.maps.Geocoder();
        if (geocoder) {
            geocoder.geocode({
                'address': address
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    callback({ Status: "OK", Latitude: lat, Longitude: lng });
                }
            });
        }
    }

    goBack(): void {
        this._router.navigateByUrl("/trips");
    }

    ngOnDestroy() {
        if (this.sub != null && typeof(this.sub) != 'undefined') {
            this.sub.unsubscribe();
        }
    }

}
