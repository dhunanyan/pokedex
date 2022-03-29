import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBAFTqjvns3cehmzMxyfizoKkaQ7-6dlXw",
  authDomain: "dhunanyan-pokedex.firebaseapp.com",
  projectId: "dhunanyan-pokedex",
  storageBucket: "dhunanyan-pokedex.appspot.com",
  messagingSenderId: "661555085921",
  appId: "1:661555085921:web:b1face85761c0667756020",
};

export const initApp = firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    let createdAt = new Date();
    const favs = {};

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert("Error creating user", error.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const convertCardsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const {
      abilities,
      height,
      id,
      held_items,
      moves,
      sprites,
      stats,
      types,
      weight,
      name,
    } = doc.data();

    return {
      abilities,
      height,
      id,
      held_items,
      moves,
      sprites,
      stats,
      types,
      weight,
      name,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
