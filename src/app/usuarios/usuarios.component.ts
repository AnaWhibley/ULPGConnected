import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',

})
export class UsuariosComponent implements OnInit {
  usersPage: Object[] = []
  users: Object[] = [];
  buscando = false;
  bTermino = '';
  roles = ['Todos', 'Administradores', 'Usuarios'];
  rolOrder = 0;
  nameOrder = true; // Primero Administradores luego Usuarios
  lastBtn = true;
  nextBtn = true;

  ini = 0;
  fin = 5;





  constructor(private userService: UserService,
              private router: Router) {

  }

  rolChange(){
    if( this.rolOrder + 1 >= 3){
      this.rolOrder = 0;
    } else {
      this.rolOrder++;
    }

  }



  ngOnInit() {
    this.usersPage = []
    this.users = [];
    
    this.userService.users.subscribe( (data: any) => {
      // No incluyo los usuarios con state == false
      this.users = data.filter(user => user.state === true);

      if( this.users.length > this.fin){
        this.nextBtn = false;
        this.usersPage = this.users.slice(this.ini,this.fin);
        this.ini = this.fin;
        this.fin += 5;
      } else {
        this.nextBtn = true;
        this.usersPage = this.users.slice(this.ini,this.users.length);
        this.ini = this.fin;
        this.fin = this.users.length;
      }
    });
  }

  buscar(termino: string){
    if( termino.trim().length == 0){
      this.buscando = false;
    } else {
      this.bTermino = termino;
      this.buscando = true;
      this.rolOrder = 0;
    }
  }

  borrarUsuario(id: string){
    console.log(id);
    this.userService.deleteUser(id);

  }

  updateUser(id){
    id ? this.router.navigate(['/detalles', id]) : {};
  }

  nextUsers(){
/*     console.log('1 marcha alante ini', this.ini);
    console.log('1 marcha alante fin', this.fin);
    console.log('===================='); */
    // plot twist
    this.usersPage = [];
    if( this.users.length > this.fin){
      this.nextBtn = false;
      this.lastBtn = false;

      this.usersPage = this.users.slice(this.ini,this.fin);

      this.ini = this.fin;
      this.fin += 5

    } else {
      this.nextBtn = true;
      this.lastBtn = false;

      this.usersPage = this.users.slice(this.ini,this.users.length);

      this.fin = this.users.length;
    }

/*     console.log('2 marcha alante ini', this.ini);
    console.log('2 marcha alante fin', this.fin);
    console.log('===================='); */

  }

  lastUsers(){
    this.nextBtn = false;
/*     console.log('1 marcha atras ini', this.ini);
    console.log('1 marcha atras fin', this.fin);
    console.log('===================='); */

    this.usersPage = [];
    this.fin = this.ini;
    this.ini -= 5;

    this.usersPage = this.users.slice(this.ini,this.fin);
/*
    console.log('2 marcha atras ini', this.ini);
    console.log('2 marcha atras fin', this.fin);
    console.log('====================');
 */

    if( this.ini <= 0){
      this.lastBtn = true;
    }
  }


}

