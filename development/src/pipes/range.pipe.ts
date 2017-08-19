/**
 * Pipe to create the range
 */

import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'range'})
export class RangePipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let res = [];
    for (let i = 1; i < value; i++) {
        res.push(i);
      }
      return res;
  }
}