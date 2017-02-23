import { Stop } from '../stop/stop';

export interface ITrip{
    id: number;
    name?: string;
    leaving?: Date;
    country?: string;
    continent?: string;
    rating?: number;
    stops?: Stop[];
    visible: boolean;
}

export class Trip implements ITrip {
    constructor(
        public id: number,
        public name?: string,
        public leaving?: Date,
        public country?: string,
        public continent?: string,
        public rating?: number,
        public stops?: Stop[],
        public visible?: boolean) { }
}