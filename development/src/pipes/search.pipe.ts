import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
    name: 'Search',
    pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {

    /**
     * @items = object from array
     * @search = term's search
     * @arg = property
     */
    transform(items: any, search: any, arg: string): any {
        if (search === undefined || !search || !arg) {
            return items;
        } else {
             let a = items.filter(item => item[arg].toLowerCase().indexOf(search) > -1);
             return a;
        }

    }
}