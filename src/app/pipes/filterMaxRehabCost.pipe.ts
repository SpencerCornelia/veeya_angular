import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMaxRehabCost'
})

export class FilterMaxRehabCostPipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    this.searchTextNumber = parseInt(searchText);

    return items.filter((item) => {
      if (item.expectedRehab) {
        return parseInt(item.expectedRehab) <= this.searchTextNumber;
      }
    });
  }
}