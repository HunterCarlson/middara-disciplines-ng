import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'range' })
export class RangePipe implements PipeTransform {
  transform(value: number): any {
    const iterable = {} as Iterable<any>;
    iterable[Symbol.iterator] = function*() {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}
