import {initializeApp} from 'firebase/app';
import { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification,signInWithEmailAndPassword} from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";     
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";   
import { getDocs, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRORAGE_BUCKET,
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

    const signUpwithEmail = async (email, password) => {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        await sendEmailVerification(user);
    };

    const putData = (key,data) => {
        set(ref(db, key), data);
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    
    }

    const signInWithEmail = async (email,password,next) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const currentUser = () => {
        return auth.currentUser;
    }

    const logoutHandle = () => {
        auth.signOut();
    }

    const [user, setUser] = useState(null);   
    
    const [search, setSearch] = useState('');

    const db = getFirestore(firebaseApp);

    return (
        <FirebaseContext.Provider value={{signUpwithEmail,putData,signInWithGoogle,logoutHandle,signInWithEmail,currentUser,setUser,user,search,setSearch,db}}>
        {children}
        </FirebaseContext.Provider>
    )
}