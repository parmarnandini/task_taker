// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../redux/slices/tasksSlice';
// import '../styles/TaskInput.css'

// const TaskInput = () => {
//   const [task, setTask] = useState('');
//   const [priority, setPriority] = useState('Low');
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     if (task.trim()) {
//       dispatch(addTask({ id: Date.now(), task, priority }));
//       setTask('');
//     }
//   };

//   return (
//     <div className="task-input">
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add a new task"
//         className="task-input__text"
//       />
//       <select
//         value={priority}
//         onChange={(e) => setPriority(e.target.value)}
//         className="task-input__select"
//       >
//         <option value="High">High</option>
//         <option value="Medium">Medium</option>
//         <option value="Low">Low</option>
//       </select>
//       <input type="date" className="task-input__date" />
//       <button onClick={handleAddTask} className="task-input__button">
//         Add Task
//       </button>
//     </div>
//   );
// };

// export default TaskInput;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/tasksSlice';
import '../styles/TaskInput.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), task, priority, dueDate }));
      setTask('');
      setDueDate('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="task-input__text"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="task-input__select"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="task-input__date"
      />
      <button onClick={handleAddTask} className="task-input__button">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;