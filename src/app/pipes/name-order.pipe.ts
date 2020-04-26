import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameOrder'
})
export class NameOrderPipe implements PipeTransform {

  transform(users: any[], order: boolean): any {
    if( !users ){
      return users;
    }

    if ( order) {
      
      return users.sort( (a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    } else {
      return users.sort( (a, b) =>  {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        // a must be equal to b
        return 0;
      } )
    }
    
    
  }

}
