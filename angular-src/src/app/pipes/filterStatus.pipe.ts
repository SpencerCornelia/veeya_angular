import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})

export class FilterStatusPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.status) {
        return item.status.toLowerCase().includes(searchText);
      }
    });
  }
}