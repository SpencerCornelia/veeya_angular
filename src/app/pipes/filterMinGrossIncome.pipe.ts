import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMinGrossIncome'
})

export class FilterMinGrossIncomePipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    this.searchTextNumber = parseInt(searchText);

    return items.filter((item) => {
      if (item.averageRent) {
        return parseInt(item.averageRent) >= this.searchTextNumber;
      }
    });
  }
}