import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'fmHourLocal',
    pure: false
})

export class FormatHour implements PipeTransform {
    transform(date: any, args?: any): any {
        return date.toString().substring(0,5);
    }
}