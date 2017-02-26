export interface IStop {
    id: number;
    name: string;
    arrival: Date;
    leaving: Date;
    city: string;
    cuisine: any;
    guide: any;
    longitude?: number;
    latitude?: number;
    order?: number;
    quote?: number;
    showPopUp?: boolean;
}

export class Stop implements IStop {
    constructor(public id: number,
                public name: string,
                public arrival: Date,
                public leaving: Date,
                public city: string,
                public cuisine: any,
                public guide: any,
                public longitude?: number,
                public latitude?: number,
                public order?: number,
                public quote?: number,
                public showPopUp?: boolean)
    {
        this.showPopUp = false;
    }
}