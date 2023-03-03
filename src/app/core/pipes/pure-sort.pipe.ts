import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSort'
})
export class PureSortPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    return value.slice().sort((a, b) => a - b);
  }

}
