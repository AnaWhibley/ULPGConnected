import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private db: AngularFirestore, private router: Router) { }

  public get likes(): Observable<any> {
    return this.db.collection('likes').valueChanges({idField: 'propertyId'});
  }


}
