import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Weather } from '../weather/weather';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'weather-form',
    template: require('./weatherform.component.html'),
    styles: [require('./weatherform.component.css')]
})

export class WeatherFormComponent{
    @Input() weatherToSave: Weather;
    @Output() newWeather: EventEmitter<Weather>;
    public submitted: boolean;
    //form1: NgForm;

    constructor() {
        this.submitted = false;
        this.newWeather = new EventEmitter<Weather>();
        //this.form1 = new NgForm([], []);
    }

    // renvoyer le weatherform object au weather component
    onSubmit(weatherForm: NgForm){      
        console.log(weatherForm.value);
        console.log(weatherForm.valid);

        this.newWeather.emit(weatherForm.value);

        this.submitted = true;
    }

}

