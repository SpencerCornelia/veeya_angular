import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMinCapRate'
})

export class FilterMinCapRatePipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    this.searchTextNumber = parseFloat(searchText);

    return items.filter((item) => {
      if (item.capRate) {
        return parseFloat(item.capRate) >= this.searchTextNumber;
      }
    });
  }
}