import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSquareFootage'
})

export class FilterSquareFootagePipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    this.searchTextNumber = parseInt(searchText);

    return items.filter((item) => {
      if (item.squareFootage) {
        return parseInt(item.squareFootage) >= this.searchTextNumber;
      }
    });
  }
}