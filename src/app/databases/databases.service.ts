
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
if (!firebase.apps.length) {
  firebase.initializeApp({
  apiKey: "AIzaSyCGHvLdIHq0KdXVOcWpBjLXHNLW_vq0kDs",
  authDomain: "prueba-aca89.firebaseapp.com",
  databaseURL: "https://prueba-aca89.firebaseio.com",
  projectId: "prueba-aca89",
  storageBucket: "prueba-aca89.appspot.com",
  messagingSenderId: "996637448063",
  appId: "1:996637448063:web:80f1586222b3afda132c4a",
  measurementId: "G-LFV64FVEKK"
});
}



@Injectable({
  providedIn: 'root',
})
export class DatabasesService {
   db =firebase.firestore();

}

