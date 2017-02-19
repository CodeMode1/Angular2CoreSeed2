﻿import { Weather, IWeather } from '../weather/weather';

export interface IConstraint{
    id: number;
    wind?: number;
    gust?: number;
    humidity?: number;
    sunRising?: Date;
    sunSet?: Date;
    clear?: Boolean;
    feelsLike?: number;
    weather?: Weather;
}

export class Constraint {
    constructor(
        public id: number,
        public wind: number,
        public gust: number,
        public humidity: number,
        public sunRising: Date,
        public sunSet: Date,
        public clear: Boolean,
        public feelsLike: number,
        public weather: Weather
    ) {}
}