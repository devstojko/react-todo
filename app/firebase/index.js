import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvRKaQxxU-gYbIQo-82n3LvaHZVaxOnfQ",
    authDomain: "reacttodo-app-80232.firebaseapp.com",
    databaseURL: "https://reacttodo-app-80232.firebaseio.com",
    projectId: "reacttodo-app-80232",
    storageBucket: "reacttodo-app-80232.appspot.com",
    messagingSenderId: "609130629405"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
