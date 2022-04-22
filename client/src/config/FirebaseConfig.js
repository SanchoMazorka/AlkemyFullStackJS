// CLIENT //

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAVSRPEf6WlNL1cgeVLzvSfLWAIaI74YWE",
  authDomain: "mazorkainc.firebaseapp.com",
  projectId: "mazorkainc",
  storageBucket: "mazorkainc.appspot.com",
  messagingSenderId: "107881072099",
  appId: "1:107881072099:web:9d5b20165a3cf2124e8cd6",
  measurementId: "G-BD20H476J9"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
//export const dbFirestore = getFirestore(app)



// CLIENT //