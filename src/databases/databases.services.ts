import { FirebaseAdmin,FirebaseFunctions } from '@firebase-admin';

FirebaseAdmin.initializeApp(FirebaseFunctions.config().firebase);

let db = FirebaseAdmin.firestore();