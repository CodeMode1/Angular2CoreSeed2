import { Stop } from '../stop/stop';

export interface ITrip{
    id: number;
    name?: string;
    leaving?: Date;
    country?: string;
    continent?: string;
    stops?: Stop[];
}

export class Trip implements ITrip {
    constructor(
        public id: number,
        public name?: string,
        public leaving?: Date,
        public country?: string,
        public continent?: string,
        public stops?: Stop[]) { }
}