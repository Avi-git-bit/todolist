import React from 'react';

const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
