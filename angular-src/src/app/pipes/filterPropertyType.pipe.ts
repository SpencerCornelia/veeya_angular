import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPropertyType'
})

export class FilterPropertyTypePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.propertyType) {
        return item.propertyType.toLowerCase().includes(searchText);
      }
    });
  }
}