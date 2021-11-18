import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore";


export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBW1PUWQtZhZmEx8DWGVJjAgwQhi3K1_Tw",
  authDomain: "auth-demo-c1925.firebaseapp.com",
  projectId: "auth-demo-c1925",
  storageBucket: "auth-demo-c1925.appspot.com",
  messagingSenderId: "746557330045",
  appId: "1:746557330045:web:059113e6cc70c0bb8d1714"
}).auth()

export const firebaseConfig = {
  apiKey: "AIzaSyDUoGrUejwS-JTHyBA6fbWKtdz2NaLh-ug",
  authDomain: "phase-2-chat.firebaseapp.com",
  projectId: "phase-2-chat",
  storageBucket: "phase-2-chat.appspot.com",
  messagingSenderId: "1047159100358",
  appId: "1:1047159100358:web:b1f5d7be23c1759e30d8c7"
};

