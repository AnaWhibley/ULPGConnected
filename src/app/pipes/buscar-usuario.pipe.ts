import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarUsuario'
})
export class BuscarUsuarioPipe implements PipeTransform {

  transform(userrs: any[], users: any[], nombre: string, buscando: boolean): any {
    if( !users || !userrs){
      return userrs;
    }

    if( !buscando ){
      return userrs;
    }

    console.log('ESTAMOS EN EL PIPE', nombre);
    return users.filter(user => user.name.toLowerCase().indexOf(nombre.toLowerCase()) !== -1);

    //return users.filter(user => user.state === true);
  }

}
