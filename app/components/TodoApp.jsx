var React = require('react');
var TodoList = require('TodoList');

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

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
