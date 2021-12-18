import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.config';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,signOut, signInWithEmailAndPassword   } from "firebase/auth";


firebaseInitialization();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    const registerNewUser = (name, newEmail,newPassword, photoURL,type,navigate,extraInfo) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,newEmail,newPassword)
            .then((userCrediential)=>{
                setUser(userCrediential.user);
                updateProfile(auth.currentUser,{displayName:name, photoURL:photoURL})
                    .then(()=>{
                        // profile updated 
                    })
                if (type === "parent") {
                    sendInfoToDB({email:userCrediential.user.email, name, photoURL, type});
                }else if (type === "sitter") {
                    sendSitterInfoToDB({email:userCrediential.user.email, name, photoURL, type,extraInfo});
                }
                navigate('/home');
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

    const sendInfoToDB = (info) =>{
        fetch("http://localhost:5000/parents",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(info)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("Registration Successful.")
                }
            })
    }
    const sendSitterInfoToDB = (info) =>{
        fetch("http://localhost:5000/sitters",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(info)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("Registration Successful.")
                }
            })
    }

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