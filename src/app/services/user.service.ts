import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {from, Observable} from "rxjs";
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore,
              private router: Router) { }

  public get users(): Observable<any> {
    return this.db.collection('users').valueChanges({ idField: 'propertyId' });
  }

  addUser(newUser) {
    this.db.collection("users").add({
      id: Math.random().toString(36).substr(2,10),
      name: newUser.name,
      surname: newUser.surname,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    }).then(() => {
      console.log('done');
      this.router.navigate(["/"])
    })
      .catch(function(error) {
        console.error('Error writing document: ', error);
      });
  }

  getUserById(propertyId) {
    return this.db.collection("users")
      .doc(propertyId).valueChanges();
  }

  getUserByName(name): Observable<any>{
    return from(this.users.pipe(
      map(c => c.find(dato => dato.name == name)),
    ));
  }

  updateUser(propertyId, newUser) {
    this.db.collection("users")
      .doc(propertyId)
      .update(
        {
          name: newUser.name,
          surname: newUser.surname,
          username: newUser.username,
          email: newUser.email,
          password: newUser.password,
        }
      ).then(() => {
      console.log('done');
      this.router.navigate(["/"])
    })
      .catch(function(error) {
        console.error('Error writing document: ', error);
      });
  }

  deleteUser(propertyId) {
    console.log('SERVICE: ',propertyId);
    this.db.collection("users")
      .doc(propertyId)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      }).catch(
      function(error) {
        console.error("Error removing document: ", error);
      });
  }

  public checkUsername(username): Observable<any>{
    return from(this.users.pipe(
      map(c => c.find(dato => dato.username == username)),
    ));
  }

}
