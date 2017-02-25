import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../weather/weather';


@Component({
    selector: 'weatherdetail',
    template: require('./weatherdetail.component.html')
})

export class WeatherDetailComponent implements OnInit, OnDestroy{
    public sub: any;
    public sub2: any;
    weather: Weather;
    public messageDetails: string;

    constructor(private _weatherService: WeatherService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {
        this.messageDetails = "";  

        if (this._activatedRoute.snapshot.url[0] != null &&
            this._activatedRoute.snapshot.url[0].path == "detail") {
            this.sub2 = this._router.events.subscribe((event) => {
                console.log(event);
                var segmentUrl = event.url.split('/');
                console.log(segmentUrl);
                if (segmentUrl[3] != null && typeof (segmentUrl[3]) != 'undefined' && segmentUrl[3] == 'detail') {
                    if (segmentUrl[4] != null && typeof (segmentUrl[4]) != 'undefined') {
                        let idWeather = +segmentUrl[4];
                        console.log(idWeather);
                        this.getWeatherBydId(idWeather);
                    }
                }
            });
        }
  
    }

    ngOnInit() {
            if (this._activatedRoute.snapshot.url[0] != null &&
                    this._activatedRoute.snapshot.url[0].path == "detail") {
                console.log("can use snapshot");
                    var snapshot = this._activatedRoute.snapshot;
                    var idWeather = snapshot.url[1].path;
                    if (idWeather != null && typeof (idWeather) != 'undefined') {
                        let id = +idWeather;
                        this.getWeatherBydId(id);
                    }
            } else {
              this.sub =  this._activatedRoute.params.subscribe(
                    params => {
                        if (params['id'] != null && params['id'] != 'undefined') {
                            var id = +params['id'];
                            console.log("here in parent");
                            console.log(id);
                            console.log(this._activatedRoute);
                            // la route n'est pas activée, la route parente est active (weather component)
                            this.messageDetails = "Aucuns détails à afficher";
                        }
                    });
            }
    }

    getWeatherBydId(id: number) {
        // call getDetails method in the nservice
        this._weatherService.getWeatherByIdAPI(id)
            .subscribe(
                result => {
                    console.log("this is the weather by id : " + JSON.stringify(result));
                    this.weather = result;
                },
                error => {
                    console.log("Cant get details by id : " + JSON.stringify(error));
                }
            );
    }

    ngOnDestroy() {
        console.log("unsub");
        if (this.sub != null && typeof(this.sub) != 'undefined') {
            this.sub.unsubscribe();
        }
        if (this.sub2 != null && typeof(this.sub2) != 'undefined') {
            this.sub2.unsubscribe();
        }
    }
}