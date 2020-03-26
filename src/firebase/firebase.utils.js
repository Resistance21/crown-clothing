import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBrkMDi2pOT_sZouCA7RkgB2R-Lh2SGmnA",
    authDomain: "crown-clothing-db-8635e.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-8635e.firebaseio.com",
    projectId: "crown-clothing-db-8635e",
    storageBucket: "crown-clothing-db-8635e.appspot.com",
    messagingSenderId: "187177931021",
    appId: "1:187177931021:web:d0af80fe5e44894ca22044",
    measurementId: "G-HX5DEMDTRL"
};
 

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
                    
                }
            )
        }
        catch (err) {
            console.log(`error making user`);
        }
    }
    return userRef;
    //console.log(snapShot)
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;