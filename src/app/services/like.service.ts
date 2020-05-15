import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import FieldValue = firebase.firestore.FieldValue;

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private db: AngularFirestore, private router: Router) { }

  public get likes(): Observable<any> {
    return this.db.collection('likes').valueChanges({idField: 'propertyId'});
  }

  public getLikesByPostId(postId) {
    return from(this.likes.pipe(
      map(c => c.find(dato => dato.postId == postId)),
    ));
  }

  public addLike(propertyId, userId) {
    this.db.collection("likes")
      .doc(propertyId)
      .update(
        {
          "likes": FieldValue.arrayUnion(userId)
        }
      ).then(() => {
      console.log('done');
    })
      .catch(function(error) {
        console.error('Error adding like: ', error);
      });
  }

  public removeLike(propertyId, userId) {
    this.db.collection("likes")
      .doc(propertyId)
      .update(
        {
          "likes": FieldValue.arrayRemove(userId)
        }
      ).then(() => {
      console.log('done');
    })
      .catch(function(error) {
        console.error('Error removing like: ', error);
      });
  }
  
}
