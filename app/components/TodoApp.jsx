var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import firebase, {firebaseRef} from 'app/firebase/';

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  componentDidMount: function () {
    console.log("componentDidMount");
    firebase.database().ref('todos/').on('value', (snapshot) => {
      const currentTodos = snapshot.val();

      if (currentTodos != null) {
        console.log(currentTodos);
      }
    })
  },
  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
