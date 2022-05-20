import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLimiter'
})
export class ContentLimiterPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 20){
      return value.substring(0, 19) + '...'
    }
    return value
  }

}
