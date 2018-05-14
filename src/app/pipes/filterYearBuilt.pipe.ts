import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterYearBuilt'
})

export class FilterYearBuiltPipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    this.searchTextNumber = parseInt(searchText);

    return items.filter((item) => {
      if (item.yearBuilt) {
        return parseInt(item.yearBuilt) >= this.searchTextNumber;
      }
    });
  }
}