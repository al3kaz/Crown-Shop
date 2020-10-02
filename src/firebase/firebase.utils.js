import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyBjgk7dyDL_y-DvwBWJ7pMiJVhs0qIYMTo",
   authDomain: "shop-62b84.firebaseapp.com",
   databaseURL: "https://shop-62b84.firebaseio.com",
   projectId: "shop-62b84",
   storageBucket: "shop-62b84.appspot.com",
   messagingSenderId: "216156863114",
   appId: "1:216156863114:web:d8d605d65274c7c4e6cb73",
   measurementId: "G-SDG3GCDWVG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
   'prompt': 'select_account'
});

export const sighInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
