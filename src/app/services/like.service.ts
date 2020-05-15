import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private db: AngularFirestore, private router: Router) { }

  public get likes(): Observable<any> {
    return this.db.collection('likes').valueChanges({idField: 'propertyId'});
  }

  public getLikesByPostId(postId): Observable<any> {
    return from(this.likes.pipe(
      map(c => c.find(dato => dato.postId == postId)),
    ));
  }
}
