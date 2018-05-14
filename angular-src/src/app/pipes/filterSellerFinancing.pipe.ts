import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSellerFinancing'
})

export class FilterSellerFinancingPipe implements PipeTransform {
  private searchTextNumber;

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.sellerFinancing) {
        return item.sellerFinancing.toLowerCase().includes(searchText);
      }
    });
  }
}
