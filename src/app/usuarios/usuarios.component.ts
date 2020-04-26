import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',

})
export class UsuariosComponent implements OnInit {
  users: any[] = [];
  mostrar = false;



  constructor(private userService: UserService) { 

  }



  ngOnInit() {
    this.userService.users.subscribe( (data: any) => {
      this.users = data;
      console.log('PROBANDO', this.users);
    }); 
  }

  borrarUsuario(id){
    this.userService.deleteUser(id);

  }


}

