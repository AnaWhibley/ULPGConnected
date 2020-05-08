import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFirestore) { }

  public get posts(): Observable<any> {
    return this.db.collection('posts').valueChanges({ idField: 'propertyId' });
  }

}
