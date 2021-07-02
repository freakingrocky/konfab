import firebase from "./firebase-config";

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Email Login Config
