import React from 'react';
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import NavBar from '../components/NavBar';

const Todo = () => (
  <div>
    <NavBar />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default Todo;