import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5C...",
  authDomain: "adablog-9c169.firebaseapp.com",
  projectId: "adablog-9c169",
  storageBucket: "adablog-9c169.firebasestorage.app",
  messagingSenderId: "1038802296855",
  appId: "1:1038802296855:web:3e2fb416c3dcbb77c4bc52",
  measurementId: "G-KCRCRHUTF3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch(err => alert(err.message));
});

