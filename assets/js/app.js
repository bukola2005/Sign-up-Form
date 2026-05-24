const toggleBtn = document.querySelector('.mobile-nav__toggle');
const mobileMenu = document.querySelector('.mobile-nav__menu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
});

// 1. Import Firebase directly from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// 2. PASTE YOUR REAL KEYS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAsqrPK6ehh2yr7iT5HmqDuRkHXw_IF2uo",
  authDomain: "creative-network-auth.firebaseapp.com",
  projectId: "creative-network-auth",
  storageBucket: "creative-network-auth.firebasestorage.app",
  messagingSenderId: "309232919869",
  appId: "1:309232919869:web:7785ac0e98d58814ff5154",
  measurementId: "G-FT0GKR9TSQ"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ... the rest of your button logic goes down here

// 4. Select the Google Button from your HTML
const googleBtn = document.querySelector('.btn--google');

// 5. Add the Event Listener
googleBtn.addEventListener('click', async (e) => {
    e.preventDefault(); // Stops the button from refreshing the page
    
    try {
        // Trigger the Google popup
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        console.log("Login Success! User details:", user);
        
        // Update the UI so you know it worked!
        googleBtn.innerHTML = `Welcome, ${user.displayName.split(' ')[0]}!`;
        googleBtn.style.backgroundColor = "#e8f5e9"; 
        googleBtn.style.color = "#2e7d32";
        googleBtn.style.border = "1px solid #2e7d32";
        
    } catch (error) {
        console.error("Google Auth failed:", error.message);
        alert("Failed to log in with Google. Check the console.");
    }
});