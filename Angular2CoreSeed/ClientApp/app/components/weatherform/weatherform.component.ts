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

    // on veut voir le edit form : quand soumis est true, for edit s'affiche.
    ngOnChanges() {
        if (this.modeEdit) {
            this.submitted = false;
            this.onEdit = true;
        }
    }

    // renvoyer le weatherform object au weather component
    onSubmit(weatherForm: NgForm){      
        console.log(weatherForm.value);
        console.log(weatherForm.valid);

        // Edit mode
        if (this.onEdit) {
            this.edWeather.emit(this.weatherToSave);          
        } else {
            this.newWeather.emit(weatherForm.value);
            
        }

        this.submitted = true;
    }
}

