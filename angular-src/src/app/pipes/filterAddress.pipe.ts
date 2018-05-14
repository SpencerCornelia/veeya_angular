import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAddress'
})

export class FilterAddressPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.address) {
        return item.address.toLowerCase().includes(searchText);
      }
    });
  }
}