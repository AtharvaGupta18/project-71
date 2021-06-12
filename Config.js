import * as firebase from 'firebase';
require('@firebase/firestore')
  var firebaseConfig = {
    apiKey: "AIzaSyCV2QvHtCy0oNOf9q2mD8ZAwtYQy-ZtLk4",
    authDomain: "project-71-b263b.firebaseapp.com",
    projectId: "project-71-b263b",
    storageBucket: "project-71-b263b.appspot.com",
    messagingSenderId: "255842015752",
    appId: "1:255842015752:web:f40d6e30b8b560e54d0fbd"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore() 