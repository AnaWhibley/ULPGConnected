import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFirestore, private router: Router) {
  }

  public get posts(): Observable<any> {
    return this.db.collection('posts').valueChanges({idField: 'propertyId'});
  }

  addPost(newPost) {
    this.db.collection("posts").add({
      id: newPost.id,
      title: newPost.title,
      description: newPost.description,
      date: newPost.date,
      userId: newPost.userId,
      userName: newPost.userName,
      fullName: newPost.fullName,
      email: newPost.email
    }).then(() => {
      console.log('done');
      this.router.navigate([""])
    }).catch(function (error) {
      console.error('Error writing document: ', error);
    });
    this.db.collection("likes").add({
      id: Math.random().toString(36).substr(2, 10),
      postId: newPost.id,
      userId: newPost.userId,
      likes: []
    }).then(() => {
      console.log('done');
      this.router.navigate([""])
    }).catch(function (error) {
      console.error('Error writing document: ', error);
    });
  }

  getPostByPropertyId(propertyId) {
    return this.db.collection("posts")
      .doc(propertyId).valueChanges();
  }

  getPostByUserId(userId): Observable<any> {
    return from(this.posts.pipe(
      map(c => c.find(dato => dato.userId == userId)),
    ));
  }

  deletePost(propertyId) {
    this.db.collection("posts")
      .doc(propertyId)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      }).catch(
      function (error) {
        console.error("Error removing document: ", error);
      });
  }
//corrección propuesta por amin
  getPostByUserId2(userId): Observable<any> {
    return from(this.posts.pipe(
      map(c => c.filter(dato => dato.userId == userId)),
    ));
  }
}
