// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask } from '../redux/slices/tasksSlice';

// const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.list);
//   const dispatch = useDispatch();

//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           {task.task} - {task.priority}
//           <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/slices/tasksSlice';
import calculateTimeRemaining from './utils/calculateTimeRemaining'; 
import '../styles/TaskList.css'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  const sortedTasks = tasks.slice().sort((a, b) => {
    // Sort tasks by priority (high to low) and then by due date
    if (a.priority !== b.priority) {
      return a.priority === 'High' ? -1 : 1;
    }
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  return (
    <ul className="task-list">
      {sortedTasks.map((task) => (
        <li key={task.id} className="task-list__item">
          <div className="task-list__info">
            {task.task} - {task.priority}
          </div>
          <div className="task-list__due-date">
            Due: {new Date(task.dueDate).toLocaleString()}
          </div>
          <div className="task-list__time-remaining">
            {calculateTimeRemaining(task.dueDate)}
          </div>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="task-list__delete-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;