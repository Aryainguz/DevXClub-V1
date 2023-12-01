import {initializeApp} from 'firebase/app';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";     
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";                 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
};

const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({children}) => {

    const signUpwithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    };

    const putData = (key,data) => {
        set(ref(db, key), data);
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    
    }


    const logoutHandle = () => {
        auth.signOut();
    }

    return (
        <FirebaseContext.Provider value={{signUpwithEmail,putData,signInWithGoogle,logoutHandle}}>
        {children}
        </FirebaseContext.Provider>
    )
}