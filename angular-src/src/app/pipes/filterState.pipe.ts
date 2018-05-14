import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterState'
})

export class FilterStatePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.state) {
        return item.state.toLowerCase().includes(searchText);
      }
    });
  }
}