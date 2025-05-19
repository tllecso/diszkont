import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true  // ✅ Standalone pipe
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number = 30): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
