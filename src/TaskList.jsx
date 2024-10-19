import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
