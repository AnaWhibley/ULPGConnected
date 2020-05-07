import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  me: any;

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.authService.userStatusChanges
            .subscribe( userDetails => {
              this.me = userDetails;
              console.log('PERFIL: ', userDetails);
            });
  }


  modMisDatos(){
    
  }

}
