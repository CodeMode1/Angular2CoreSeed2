export interface IWeather {
    name: string;
    date: Date;
    dateFormatted?: string;
    tempC?: number;
    summary?: string;
    city?: string;
    temperatureF?: number;
}


export class Weather implements IWeather {
    constructor(
        public name: string,
        public date: Date,
        public dateFormatted?: string,
        public tempC?: number,
        public summary?: string,
        public city?: string,
        public temperatureF?: number) { }
}