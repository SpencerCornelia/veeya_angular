import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLastName'
})

export class FilterLastNamePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.lastName) {
        return item.lastName.toLowerCase().includes(searchText);
      }
    });
  }
}