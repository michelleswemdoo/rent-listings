import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { auth } from '@/firebase';

export const registerUser = async (
  email: string,
  password: string,
): Promise<UserCredential | undefined> => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const loginUser = async (
  email: string,
  password: string,
): Promise<UserCredential | undefined> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
