import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'

import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js'

const auth = getAuth()

const db = getFirestore()
const conversationRef = collection(db, 'conversations')

export {
    auth,
    db,
    conversationRef,
    query,
    where,
    getDocs,
    onSnapshot,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    onAuthStateChanged
}