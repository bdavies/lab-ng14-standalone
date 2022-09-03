import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyByTwo',
  standalone: true,
})
export class MultiplyByTwoPipe implements PipeTransform {
  transform(value: number): number {
    return value * 2;
  }
}
