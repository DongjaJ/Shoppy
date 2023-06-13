import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import Firebase from '../Firebase';

const provider = new GoogleAuthProvider();

const auth = getAuth();
auth.languageCode = 'it';

export async function login() {
  const { user } = await signInWithPopup(auth, provider);
  console.log(user.displayName, user.photoURL);
  return user;
}

export async function logout() {
  await signOut(auth);
}
