import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAKvd_qoKU0C4c0ta9LpgohsWz0PtWE5dw",
  authDomain: "crwn-db-ca3e4.firebaseapp.com",
  databaseURL: "https://crwn-db-ca3e4.firebaseio.com",
  projectId: "crwn-db-ca3e4",
  storageBucket: "",
  messagingSenderId: "192245946958",
  appId: "1:192245946958:web:692b0a427eccb53d5dc11f"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if(!snapshot.exists){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;