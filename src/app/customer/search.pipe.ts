import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], keyword?: string){
    if (keyword) {
      keyword = keyword.toLocaleLowerCase();
      return list.filter(item => {
        return item.name.toLocaleLowerCase().includes(keyword);
      })
    } else {
      return list;
    }
  }

}
