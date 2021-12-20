import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import router from "./router";

//Firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};
initializeApp(firebaseConfig);

// App
const app = createApp(App);

// Router
app.use(router);

//Mount
app.mount("#app");
