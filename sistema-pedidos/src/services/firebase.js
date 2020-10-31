import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBqPpPtsD6K80sWBzA8gsZSVkmoAEmklTM",
    authDomain: "reactzzaria-7511b.firebaseapp.com",
    databaseURL: "https://reactzzaria-7511b.firebaseio.com",
    projectId: "reactzzaria-7511b",
    storageBucket: "reactzzaria-7511b.appspot.com",
    messagingSenderId: "605896858502",
    appId: "1:605896858502:web:8be9b03a8c8edd46b56a07",
    measurementId: "G-HQB6Z1WPLL"
  };
firebase.initializeApp(config)

export default firebase