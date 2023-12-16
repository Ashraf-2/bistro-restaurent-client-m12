import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            console.log('current user: ',currentUser);
            setLoading(false);
        })
        return ()=> {
            return unsubscribe();
        }
    },[])

    const regisertUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);

    }
    const logIn = (email,password)=> {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=> {
        setLoading(true);
        signOut(auth);
    }

    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
        
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        user,
        loading,
        regisertUser,
        logIn,
        signOut,
        logOut,
        updateUserProfile,
        googleLogin


    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;