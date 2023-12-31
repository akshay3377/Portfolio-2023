import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB5YuJCt7U_jZEDABOZTfWpHfyjn4BSoDA",
  authDomain: "portfilio-nextjs.firebaseapp.com",
  projectId: "portfilio-nextjs",
  storageBucket: "portfilio-nextjs.appspot.com",
  messagingSenderId: "258707616929",
  appId: "1:258707616929:web:187837f9bdb34074d22ce0",
};

const FirebaseApp = initializeApp(firebaseConfig);
export const databaseConnection = getFirestore(FirebaseApp);
export const realTimeDB = getDatabase(FirebaseApp);
// export const postsDB = collection(databaseConnection, "response");
