import firebase from 'firebase'
import 'firebase/firestore'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE__API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE__AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase