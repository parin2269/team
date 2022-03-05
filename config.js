import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {

    apiKey: "AIzaSyCTF2qbKln9LTvHxGi1XiRpuLgE5NzZGO0",
  
    authDomain: "voting-app-25f23.firebaseapp.com",
  
    databaseURL: "https://voting-app-25f23-default-rtdb.firebaseio.com",
  
    projectId: "voting-app-25f23",
  
    storageBucket: "voting-app-25f23.appspot.com",
  
    messagingSenderId: "764320391608",
  
    appId: "1:764320391608:web:fe24eb5113f23b637c6f4d"
  
  };
v  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();