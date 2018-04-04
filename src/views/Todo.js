import React from 'react';
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Menu from '../components/Menu';

const Todo = () => (
  <div>
    <Menu />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default Todo;