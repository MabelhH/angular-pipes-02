import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: unknown, ...arg: unknown[]): unknown {
    return value;
  }

}
