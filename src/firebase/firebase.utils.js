import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyCbMpNddlA2rl_ZL2VzhwEr7Myt1kx0Tno",
   authDomain: "shop-9e9e5.firebaseapp.com",
   databaseURL: "https://shop-9e9e5.firebaseio.com",
   projectId: "shop-9e9e5",
   storageBucket: "shop-9e9e5.appspot.com",
   messagingSenderId: "106424485347",
   appId: "1:106424485347:web:ad41d9e0b2390e1cef4cd6",
   measurementId: "G-JNL076YVEE"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;