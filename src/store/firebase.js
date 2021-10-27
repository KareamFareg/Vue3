 import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAwMXqbj-l1RAFFs3qKXi6cmR6KRb5aXqU",
    databaseURL:"https://zero-vue-default-rtdb.firebaseio.com/",
    authDomain: "zero-vue.firebaseapp.com",
    projectId: "zero-vue",
    storageBucket: "zero-vue.appspot.com",
    messagingSenderId: "584127700008",
    appId: "1:584127700008:web:4fc3d9fcff1e3d612e291d"
};
const db = initializeApp(firebaseConfig);

export default db;

