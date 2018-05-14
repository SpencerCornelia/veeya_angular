import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCity'
})

export class FilterCityPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.city) {
        return item.city.toLowerCase().includes(searchText);
      }
    });
  }
}