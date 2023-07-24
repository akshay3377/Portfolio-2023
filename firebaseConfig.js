import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfigFile = {
  apiKey: "AIzaSyBGKV1ZRG-VZ6BIJy8SMWfJsw7h2J-Uc08",
  authDomain: "portfilio-web.firebaseapp.com",
  projectId: "portfilio-web",
  storageBucket: "portfilio-web.appspot.com",
  messagingSenderId: "787324298205",
  appId: "1:787324298205:web:575be0e1e1bc7ce9340c34",
};

const App = initializeApp(firebaseConfigFile);
export const databaseConnection = getFirestore(App);
// export const postsDB = collection(databaseConnection, "response");
