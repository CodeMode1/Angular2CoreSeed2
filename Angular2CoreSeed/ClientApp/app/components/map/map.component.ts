import { Component, OnInit } from '@angular/core';

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
export class MapComponent {

    // google maps zoom level
    public zoom: number = 8;
    public markers: marker[];
    public lat: number;
    public lng: number;
    public infoClickedStop: string;

    constructor() {
        // initial center position for the map
        this.infoClickedStop = "";
        this.lat = 45.5016889;
        this.lng = -73.56725599999999;
        this.markers = [];
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

}
