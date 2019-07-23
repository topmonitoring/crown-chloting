import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7a18nuxIIHOTqNEXOUfT8ckghqzcDsJE",
  authDomain: "crown-db-dd6d4.firebaseapp.com",
  databaseURL: "https://crown-db-dd6d4.firebaseio.com",
  projectId: "crown-db-dd6d4",
  storageBucket: "",
  messagingSenderId: "134300940982",
  appId: "1:134300940982:web:aa534b1dcf760c2e"
};

export const createUserProfaleDocument = async (userAuth, aditionalData) => {
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
        ...aditionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
