import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCeZ_503BI58lybq0q_q5F2rTedryLXvU",
    authDomain: "confab-782e5.firebaseapp.com",
    projectId: "confab-782e5",
    storageBucket: "confab-782e5.appspot.com",
    messagingSenderId: "712395892977",
    appId: "1:712395892977:web:d88c59876fbf2b68446150",
    measurementId: "G-EBMQ3FHJ1B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
