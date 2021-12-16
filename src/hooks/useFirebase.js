import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.config';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,signOut, signInWithEmailAndPassword   } from "firebase/auth";


firebaseInitialization();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    const registerNewUser = (name, newEmail,newPassword, photoURL,navigate) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,newEmail,newPassword)
            .then((userCrediential)=>{
                setUser(userCrediential.user);
                updateProfile(auth.currentUser,{displayName:name, photoURL:photoURL})
                    .then(()=>{
                        // profile updated 
                    })
                navigate('/home')
                window.location.reload();
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    useEffect(()=>{
        setIsLoading(true)
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[auth])

    const loginUser = (existEmail,existPassword,navigate,locationFrom) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,existEmail,existPassword)
            .then(data=>{
                if (data.user) {
                    setUser(data.user);
                    navigate(locationFrom, {replace: true});
                    setIsLoading(false)
                }

            })
    }

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
            .then(()=>{
                setUser({})
                setIsLoading(false)
            })
    }

    return {
        user,
        isLoading,
        loginUser,
        registerNewUser,
        logOut
    }
};

export default useFirebase;