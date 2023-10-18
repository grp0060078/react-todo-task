
import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);

  const handleStatusChange = (newStatus) => {
    onUpdate({
      ...todo,
      status: newStatus,
    });
  };

  const handleSaveEdit = () => {
    onUpdate({
      ...todo,
      task: updatedTask,
      description: updatedDescription,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-card">
      {isEditing ? (
        
        <>
         <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        
        <>
          <h3>{todo.task}</h3>

          <p>{todo.description}</p>

          <div className="status-dropdown">status
        <select
          value={todo.status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option    value="not completed">Not Completed</option>
          <option    value="completed">Completed</option>
        </select>
      </div>
          <button className='move' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='moved' onClick={() => onDelete(todo)}>Delete</button>
        </>
      )}
     
    </div>
  );
};

export default Todo;
