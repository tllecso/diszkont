import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true  // ✅ Angular standalone környezethez szükséges
})
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';
    return value.toLocaleString('hu-HU') + ' Ft';
  }
}
