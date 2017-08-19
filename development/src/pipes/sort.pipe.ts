import { PipeTransform, Pipe } from '@angular/core';

@Pipe ({ name: 'sort' })
export class SortPipe implements PipeTransform {
    transform(value: string[]) : any {
        value.sort();
        return value;
    }
}