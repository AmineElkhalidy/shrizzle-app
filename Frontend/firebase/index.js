// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBzzI96ae6T6cSjhCkULOcSlKeIJ7IZlow',
	authDomain: `shrizzle-82093.firebaseapp.com`,
	projectId: 'shrizzle-82093',
	storageBucket: `shrizzle-82093.appspot.com`,
	messagingSenderId: '100194867831',
	appId: '1:100194867831:web:cb002645f66dabe7908472',
	measurementId: 'G-52H92YF2C3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseStorage = getStorage(app);
