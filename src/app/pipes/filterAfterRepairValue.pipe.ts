import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAfterRepairValue'
})

export class FilterAfterRepairValuePipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    this.searchTextNumber = parseInt(searchText);

    return items.filter((item) => {
      if (item.afterRepairValue) {
        return parseInt(item.afterRepairValue) <= this.searchTextNumber;
      }
    });
  }
}