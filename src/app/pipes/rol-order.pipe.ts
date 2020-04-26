import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolOrder'
})
export class RolOrderPipe implements PipeTransform {

  transform(users: any[], order: number): any {
    if( !users ){
      return users;
    }

    if ( order == 1) {
      return users = users.filter(user => user.role === 1);
    } else if (order == 2){
      return users = users.filter(user => user.role === 2);
    } else {
      return users;
    }
    
    
  }
}
