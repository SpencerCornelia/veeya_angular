import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPurchasePrice'
})

export class FilterPurchasePricePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.purchasePrice) {
        return item.purchasePrice.toLowerCase().includes(searchText);
      }
    });
  }
}