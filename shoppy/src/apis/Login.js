import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import auth from '../Firebase';

const provider = new GoogleAuthProvider();

auth.languageCode = 'it';

export async function login() {
  const { user } = await signInWithPopup(auth, provider);
  console.log(user.displayName, user.photoURL);
  return user;
}

export async function logout() {
  await signOut(auth);
}
