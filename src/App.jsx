
import React, { useState } from 'react';
import TodoList from './comments/TodoList';
import './comments/App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const addTodo = () => {
    if (newTask.trim() === '') return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        task: newTask,
        description: newDescription,
        status: 'not completed',
      },
    ]);
    setNewTask('');
    setNewDescription('');
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>My Todo</h1>
      <div className="input">
        <span className='padding'>
        <input
          type="text"
          placeholder="Todo Name"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        </span>

        <span className='trim'>
          <input
          type="text"
          placeholder="Todo Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        /></span>

        <span className='pad'>
         <button onClick={addTodo}>Add Todo</button>
        </span>
        
        
        
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
}

export default App;
