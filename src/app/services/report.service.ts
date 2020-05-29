import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {from, Observable} from "rxjs";
import {map, take} from "rxjs/operators";
import FieldValue = firebase.firestore.FieldValue;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private db: AngularFirestore, private router: Router) {
  }

  public get reports(): Observable<any> {
    return this.db.collection('reports').valueChanges({idField: 'propertyId'});
  }

  public isReported(postId): Observable<any> {
    return from(this.reports.pipe(
      map(c => c.find(dato => dato.postId == postId)),
    ));
  }

  updateReport(postId, userId) {
    this.isReported(postId).pipe(take(1)).subscribe((data)=> {
      if (data) {
        this.db.collection("reports")
          .doc(data.propertyId)
          .update(
            {
              "reports": FieldValue.arrayUnion(userId)
            }
          ).then(() => {
          console.log('done');
        })
          .catch(function(error) {
            console.error('Error adding like: ', error);
          });
      }else{
        this.db.collection("reports").add({
          id: Math.random().toString(36).substr(2,10),
          postId: postId,
          reports: [userId]
        }).then(() => {
          console.log('done');
          this.router.navigate(["/"])
        }).catch(function (error) {
          console.error('Error writing document: ', error);
        });
      }
    });
  }

  deleteReport(propertyId, cb?) {
    this.db.collection("reports")
      .doc(propertyId)
      .delete()
      .then(function () {
        if (cb) cb();
        console.log("Document successfully deleted!");
      }).catch(
      function(error) {
        console.error("Error removing document: ", error);
      });
  }


  /*
  * deletePost(propertyId) {
    this.db.collection("posts")
      .doc(propertyId)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      }).catch(
      function (error) {
        console.error("Error removing document: ", error);
      });
  }*/

}
