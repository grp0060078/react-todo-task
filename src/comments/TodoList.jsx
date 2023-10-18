
import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = filter === 'all' ? todos :
    filter === 'completed' ? todos.filter(todo => todo.status === 'completed') :
    todos.filter(todo => todo.status === 'not completed');

  return (
    <div className="todos">
      <h3 className='head'>My todos</h3>
      <div className="filter-dropdown">Status Filter :
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      <div>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
