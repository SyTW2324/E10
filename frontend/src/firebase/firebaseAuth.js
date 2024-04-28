import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const auth = getAuth(firebaseApp)

export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
