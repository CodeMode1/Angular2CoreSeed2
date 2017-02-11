export interface IWeather {
    id: number;
    name: string;
    hour?: Date;
    tempC?: number;
    summary?: string;
    temperatureF?: number;
}

export class Weather implements IWeather {
    constructor(
        public id: number,
        public name: string,
        public hour?: Date,
        public tempC?: number,
        public summary?: string,
        public temperatureF?: number) { }
}