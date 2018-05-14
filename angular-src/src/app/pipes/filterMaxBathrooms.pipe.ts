import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMaxBathrooms'
})

export class FilterMaxBathroomsPipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    if (searchText == '5+') {
      searchText = '5';
    }

    this.searchTextNumber = parseInt(searchText);

    return items.filter((item) => {
      if (item.bathrooms) {
        if (item.bathrooms == '5+') {
          item.bathrooms == '5';
        }
        return parseInt(item.bathrooms) <= this.searchTextNumber;
      }
    });
  }
}