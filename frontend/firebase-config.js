// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB-zVaa8dgtQ48f6s4Dj80L9U9qxYS1Qqw',
  authDomain: 'sytw-e10-dc9d8.firebaseapp.com',
  projectId: 'sytw-e10-dc9d8',
  storageBucket: 'sytw-e10-dc9d8.appspot.com',
  messagingSenderId: '560794896813',
  appId: '1:560794896813:web:3741abf81b5b4f8b193924',
  measurementId: 'G-BD05X9BS7K',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
