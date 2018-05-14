import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFirstName'
})

export class FilterFirstNamePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.firstName) {
        return item.firstName.toLowerCase().includes(searchText);
      }
    });
  }
}