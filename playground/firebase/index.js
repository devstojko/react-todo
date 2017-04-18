import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRuning: true,
  user: {
    name: 'Nemanja',
    age: 25
  },
  todos: {
    'id123': {
      text: 'Film some vids'
    }
  }
});
//
// firebaseRef.update({
//   isRuning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   version: '1.0.1'
// }).then(() => {
//   console.log('updated worked');
// }, () => {
//   console.log('update failed');
// });

// update app nam and user name with one call
// firebaseRef.update({
//   'app/name': 'App name',
//   'user/name': 'slavko'
// });
//
// // use child method to update app name and user name
// firebaseRef.child('app').update({
//   name: 'ReactTODO'
// });
//
// firebaseRef.child('user').update({
//   age: 26
// });

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// })

// firebaseRef.update({
//   isRuning: null
// });
//
// firebaseRef.child('user/age').remove();

// fetch data from database
// firebaseRef.once('value').then((snapshot) =>{
//   console.log('got entire database', snapshot.val());
// }, (e) => {
//   console.log('unableto fetch value', e);
// });


// firebaseRef.child('app').once('value').then((snapshot) =>{
//   console.log('got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unableto fetch value', e);
// });

// Listen for changes in farebase
// var logData = (snapshot) => {
//   console.log('got value', snapshot.val());
// }
// firebaseRef.on('value', logData);
//
// // remove listener
// firebaseRef.off(logData);
//
// firebaseRef.update({isRuning: false});
//
// var logData = (snapshot) => {
//   console.log('got value', snapshot.val());
// }
// firebaseRef.child('user').on('value', logData);
//
// firebaseRef.child('user').update({
//   name: 'Stojko'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// // var newNoteRef = notesRef.push()
// // newNoteRef.set({
// //   text: 'Walk the dog'
// // });
//
// var newNoteRef = notesRef.push({
//   text: 'some text'
// });
//
// console.log('Id', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
