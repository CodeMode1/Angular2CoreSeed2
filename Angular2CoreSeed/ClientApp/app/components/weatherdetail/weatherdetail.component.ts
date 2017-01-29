import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'weatherdetail',
    template: require('./weatherdetail.component.html')
})

export class WeatherDetailComponent{
    name: string;
    private sub: any;
    weather: Weather;
    public messageDetails: string;

    constructor(private route: ActivatedRoute, private http: Http) {
        this.messageDetails = "";
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];
            if (this.name != null || this.name != undefined) {
                this.getDetails();
            } else {
                this.messageDetails = "Aucuns détails à afficher";
            }           
        });      
    }

    getDetails() {
        this.http.get('api/weather/weatherbyname/'+this.name).subscribe(result => {
            this.weather = result.json();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

interface Weather {
    id: number;
    name: string;
    date: Date;
    dateFormatted: string;
    tempC: number;
    summary: string;
    city: string;
    temperatureF: number;
}