import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
    name: 'fmTripDate',
    pure: false
})

export class TripDate implements PipeTransform {
    transform(date: any, args?: any): any {
        let d = new Date(date);
        moment.locale('en-ca');
        return moment(d).format('LL');
    }
}