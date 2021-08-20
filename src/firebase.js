import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJGuXQiacMHUx1rZ_Cqg6Ztg5EtVe4q0E",
    authDomain: "facebook-clone-3c4cc.firebaseapp.com",
    projectId: "facebook-clone-3c4cc",
    storageBucket: "facebook-clone-3c4cc.appspot.com",
    messagingSenderId: "887706631859",
    appId: "1:887706631859:web:c3ded9876250a759b4bac6",
    measurementId: "G-VNXVV1KXB3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;