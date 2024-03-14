import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

import { auth } from './firebaseConfig';

export function signInWithEmailAndPassword(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }