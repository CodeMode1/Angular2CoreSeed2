import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
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
    @Output() edWeather: EventEmitter<Weather>;
    @Input() modeEdit: boolean;
    public submitted: boolean;
    public onEdit: boolean;
    //form1: NgForm;

    constructor() {
        this.onEdit = false;
        this.submitted = false;
        this.newWeather = new EventEmitter<Weather>();
        this.edWeather = new EventEmitter<Weather>();
        //this.form1 = new NgForm([], []);
    }

    // on veut soumettre on edit.
    ngOnChanges() {

    }

    // renvoyer le weatherform object au weather component
    onSubmit(weatherForm: NgForm){      
        console.log(weatherForm.value);
        console.log(weatherForm.valid);

        if (this.modeEdit) {
            this.edWeather.emit(this.weatherToSave);
            // reset pour retourner mode creer
            this.modeEdit = false; 
        } else {
            this.newWeather.emit(weatherForm.value);
            // reset pour retourner mode editer
            this.modeEdit = true;
            this.submitted = true;
        }
    }
}

