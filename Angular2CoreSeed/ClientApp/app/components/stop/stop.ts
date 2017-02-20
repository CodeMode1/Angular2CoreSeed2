export interface IStop {
    id: number;
    name: string;
    arrival: Date;
    leaving: Date;
    city: string;
    longitude: number;
    latitude: number;
    order: number;
    quote: number;
}

export class Stop implements IStop {
    constructor(public id: number,
                public name: string,
                public arrival: Date,
                public leaving: Date,
                public city: string,
                public longitude: number,
                public latitude: number,
                public order: number,
                public quote: number) { }
}