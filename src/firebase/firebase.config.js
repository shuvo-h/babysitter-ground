import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.init";

const firebaseInitialization = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;