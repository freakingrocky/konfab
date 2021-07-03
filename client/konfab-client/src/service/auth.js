import firebase from '../config/firebase-config';

const socialMediaAuth = (provider) => {
    if (provider === 'Anonymous') {
            return firebase.auth().signInAnonymously().then((res) => {
                return res.user;
            }).catch((err) => {
            return err;
        });
    } else {
        return firebase.auth().signInWithPopup(provider).then((res) => {
            return res.user;
        }).catch((er) => {
            return er;
        });}
};

export default socialMediaAuth;