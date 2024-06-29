import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.interface';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: Product[],search:string): Product[] {
    if (!items) {
      return [];
    }
    if (!search) {
      return items;
    }
    search = search.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(search) ||
             it.category.toLowerCase().includes(search) ||
             it.price.toString().toLowerCase().includes(search);
    });
  }

}
