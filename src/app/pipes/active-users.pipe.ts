import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeUsers'
})
export class ActiveUsersPipe implements PipeTransform {

  transform(users: any[]): any {
    if( !users ){
      return users;
    }
    return users.filter(user => user.state === true);
  }

}
