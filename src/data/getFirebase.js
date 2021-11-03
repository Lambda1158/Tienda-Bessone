import firebase from "firebase"
import 'firebase/firestore'

// export function getFirebase(){// return app// 

const firebaseConfig = {
    apiKey: "AIzaSyDNGzsyvV-POC5kvHz6z2-d2IDUVAO3S74",
    authDomain: "tienda-arkadia.firebaseapp.com",
    projectId: "tienda-arkadia",
    storageBucket: "tienda-arkadia.appspot.com",
    messagingSenderId: "494107744231",
    appId: "1:494107744231:web:b16675aed17bb702a4cf42"
};


  const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
};