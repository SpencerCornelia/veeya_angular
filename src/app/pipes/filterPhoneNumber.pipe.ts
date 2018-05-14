import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPhoneNumber'
})

export class FilterPhoneNumberPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item.phoneNumber) {
        return item.phoneNumber.toLowerCase().includes(searchText);
      }
    });
  }
}