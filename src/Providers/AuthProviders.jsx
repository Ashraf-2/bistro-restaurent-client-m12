import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

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

    const authInfo = {
        user,
        loading,
        regisertUser,
        logIn,
        signOut,
        logOut,
        updateUserProfile

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;