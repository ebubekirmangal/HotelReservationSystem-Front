import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: number, currencyCode: string): string | null {
    return this.currencyPipe.transform(value, currencyCode, 'symbol-narrow', '1.2-2');
  }
}