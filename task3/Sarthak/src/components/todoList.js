import React, { useState } from 'react';
import TodoForm from './todoForm';
import Todo from './todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    const newTodos = [todo, ...todos]
    setTodos(newTodos);
    console.log(...todos)
  };

  const updateTodo = (todoId, newValue) => {
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo;
      });
      setTodos(updatedTodos);
  };

  return (<>
      <h1>MAKE A TODO LIST</h1>
      <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}/></>
  );
}




export default TodoList;
