import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'rating',
    template: require('./rating.component.html'),
    styles: [require('./rating.component.css')]
})

export class RatingComponent {
    @Input() rating: number;
    @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
    public rates: number[];
    public diffRates: number[];
    constructor() {
        this.rates = [];
        this.diffRates = [];
        this.diffRates.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    }

    ngOnChanges() {
        this.getRating();
    }

    getRating() {
        if (this.rating != undefined) {
            console.log(this.rating);
            this.rates = [];
            for (var i = 1; i <= this.rating; i++) {
                this.rates.push(i);
            }
            var diffStars = this.diffRates.length - this.rates.length;
            this.diffRates.length = diffStars;
        }
    }

    onClick(rating: number): void {
        this.rating = rating;
        this.ratingClick.emit({
            rating: rating
        });
    }    
}