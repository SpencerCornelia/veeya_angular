import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMaxBedrooms'
})

export class FilterMaxBedroomsPipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    if (searchText == '5+') {
      searchText = '5';
    }

    this.searchTextNumber = parseInt(searchText);

    return items.filter((item) => {
      if (item.bedrooms) {
        if (item.bedrooms == '5+') {
          item.bedrooms = '5';
        }
        return parseInt(item.bedrooms) <= this.searchTextNumber;
      }
    });
  }
}