import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

const email = 'phamdinhson07@gmail.com'
const password = 'shivalkira78'

const auth = getAuth();

/* createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('code', errorCode);
    console.log('message', errorMessage);
  }); */

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

updateProfile(auth.currentUser, {
  displayName: "Phạm Đình Sơn",
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log('code', errorCode);
  console.log('message', errorMessage);
}); 

sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });