import {EventEmitter, Injectable, NgZone, Output} from '@angular/core';

import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);

  private eventAuthError = new BehaviorSubject<String>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(private afAuth: AngularFireAuth,
              private bd: AngularFirestore,
              private router: Router,
              private ngZone: NgZone) {

  }

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  login(email: string, password: string) {

    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user)=>{
        this.bd.collection("users").ref.where("email", "==", user.user.email).onSnapshot(snap =>{
          snap.forEach(userRef => {
            this.currentUser = userRef.data();
            //setUserStatus
            this.setUserStatus(this.currentUser);
            // no tiene sentido
            if(userRef.data().role !== 2) {
              console.log("Administrador logeado");

              // Amin tocando
              this.userStatusChanges.next(this.currentUser);
              this.ngZone.run(() => this.router.navigate(["home"]));
              //this.router.navigate(["login"]);
            }else{
              console.log("Usuario logeado");
              // Amin tocando
              this.userStatusChanges.next(this.currentUser);
              this.ngZone.run(() => this.router.navigate(["home"]));
              //this.router.navigate(["home"]);
            }
          })
        })
      }).catch(error => {
      this.eventAuthError.next(error);
    })
  }

  logOut(){
    this.afAuth.auth.signOut()
      .then(()=>{
        console.log("user signed out successfully");
        this.userStatusChanges.next(undefined);
        this.currentUser = null;
        //set the listenener to be null, for the UI to react
        this.setUserStatus(null);
        this.ngZone.run(() => this.router.navigate(["/"]));

      }).catch(error => {
      this.eventAuthError.next(error);
    })
  }

  signUp(name:string, surname:string, username:string, email:string, password:string){

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((userResponse)=>{
        // add the user to the "users" database
        let user = {
          id: userResponse.user.uid,
          name: name,
          surname: surname,
          username: username,
          email: userResponse.user.email,
          state: true,
          role: 2,
        };

        //add the user to the database
        this.bd.collection("users").add(user)
          .then(user => {
            user.get().then(x => {
              //return the user data
              this.currentUser = x.data();
              this.setUserStatus(this.currentUser);
              this.router.navigate(["home"]);
            })
          }).catch(err => {
          console.log(err);
        })
      })
      .catch((err)=>{
        this.eventAuthError.next(err);
      })
  }
}
