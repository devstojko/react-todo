var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: "Learn javascript"
        },
        {
          id: 2,
          text: "Learn react"
        },
        {
          id: 3,
          text: "Learn sass"
        },
        {
          id: 4,
          text: "Learn css3"
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    console.log('some text', text);
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
