import firebase from "firebase";
var firebaseConfig = {
apiKey: "AIzaSyDuuwCx5OMjfYbiMWQzo84orO07eJZoEvo",
    authDomain: "reactlab-1b606.firebaseapp.com",
    projectId: "reactlab-1b606",
    storageBucket: "reactlab-1b606.appspot.com",
    messagingSenderId: "241745355751",
    appId: "1:241745355751:web:c6df8412c4a63d98c49342",
    measurementId: "G-2K2YJLMMBF"
  };
  
 const FirebaseApp= firebase.initializeApp(firebaseConfig);
 const db=FirebaseApp.firestore();
 const auth=firebase.auth();
 const storage=firebase.storage();
 export {db,auth,storage};