
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

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

let db =firebase.firestore();
export class database{
 db;

  constructor(
  ) { }

}