import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
 
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
);
 
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;