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
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import { ActiveUsersPipe } from './pipes/active-users.pipe';
import { BuscarUsuarioPipe } from './pipes/buscar-usuario.pipe';
import { RolOrderPipe } from './pipes/rol-order.pipe';
import { NameOrderPipe } from './pipes/name-order.pipe';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LikesComponent } from './likes/likes.component';
import { PostCreateComponent } from './post-create/post-create.component';
import {AuthService} from "./services/auth.service";
import { MisPostsComponent } from './mis-posts/mis-posts.component';
import { MisLikesComponent } from './mis-likes/mis-likes.component';
import { ReportMenuComponent } from './report-menu/report-menu.component';


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
    UserDetailsComponent,
    ActiveUsersPipe,
    BuscarUsuarioPipe,
    RolOrderPipe,
    NameOrderPipe,
    PostListComponent,
    PostItemComponent,
    PostDetailsComponent,
    LikesComponent,
    PostDetailsComponent,
    PostCreateComponent,
    MisPostsComponent,
    MisLikesComponent,
    ReportMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [AngularFireStorage, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
