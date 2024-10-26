import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase-config';

export const createUser = async (email, password) => {
  if (!email || !password) {
    console.error('Provide Email and Password');
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
  }
};

export const signIn = async (email, password) => {
  if (!email || !password) {
    console.error('Provide Email and Password');
    return;
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
  }
};
