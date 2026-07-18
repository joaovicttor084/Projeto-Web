import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBy5ASy0ItGe5OeirztSfmJWDdUXBsaYsg",
    authDomain: "faxino-9ac31.firebaseapp.com",
    projectId: "faxino-9ac31",
    storageBucket: "faxino-9ac31.firebasestorage.app",
    messagingSenderId: "473154351021",
    appId: "1:473154351021:web:f3c9e8cbab9a9336fafb24",
    measurementId: "G-0S3NE1VHFV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };