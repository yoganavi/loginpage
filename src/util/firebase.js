import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDTBZCzx1hQFsssLb31WL-zhBZ4TDC-ty8",
    authDomain: "project2-4d3f9.firebaseapp.com",
    databaseURL: "https://project2-4d3f9.firebaseio.com",
    projectId: "project2-4d3f9",
    storageBucket: "project2-4d3f9.appspot.com",
    messagingSenderId: "573325093196",
    appId: "1:573325093196:web:1422b12ad6d9839187c7e9",
    measurementId: "G-JLCGF7YG6X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;