import { Pipe } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipePipe {

  transform(array: any, args?: any): Array<any> {
    array.sort((a: string, b: string) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
