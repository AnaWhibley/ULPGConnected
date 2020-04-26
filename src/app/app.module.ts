import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {SigninComponent} from './signin/signin.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {PerfilComponent} from './perfil/perfil.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserDetailsComponent} from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SigninComponent,
    NavbarComponent,
    HomeComponent,
    PerfilComponent,
    UsuariosComponent,
    UserCreateComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
