import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {PerfilComponent} from './perfil/perfil.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {PostItemComponent} from "./post-item/post-item.component";
import {PostListComponent} from "./post-list/post-list.component";


const ROUTES: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'me', component: PerfilComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'detalles/:id', component: UserDetailsComponent },
  { path: 'crear', component: UserCreateComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { path: 'posts', component: PostListComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artist/:id', component: ArtistaComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
*/
