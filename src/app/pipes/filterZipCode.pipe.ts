import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterZipCode'
})

export class FilterZipCodePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    return items.filter((item) => {
      if (item.zipCode) {
        return item.zipCode.includes(searchText);
      }
    });
  }
}