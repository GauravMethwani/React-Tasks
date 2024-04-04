// import React, { useState } from 'react';
// import './DragDrop.css'; // Import CSS file for styling

// const taskBoxes = ["Unplanned", "Today", "Tomorrow", "This Week", "Next Week"];

// const initialTasks = [
//   { id: 1, content: "Task-1", taskBox: "Unplanned" },
//   { id: 2, content: "Task-2", taskBox: "Unplanned" },
//   { id: 3, content: "Task-3", taskBox: "Unplanned" },
//   { id: 4, content: "Task-4", taskBox: "Unplanned" },
//   { id: 5, content: "Task-5", taskBox: "Unplanned" },
//   { id: 6, content: "Task-6", taskBox: "Unplanned" },
//   { id: 7, content: "Task-7", taskBox: "Unplanned" },
//   { id: 8, content: "Task-8", taskBox: "Unplanned" },
//   { id: 9, content: "Task-9", taskBox: "Unplanned" },
//   { id: 10, content: "Task-10", taskBox: "Unplanned" },
//   // Add more initial tasks as needed
// ];

// export default function DragDrop() {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [taskContent, setTaskContent] = useState("");
//   const [draggedTask, setDraggedTask] = useState(null);

//   const handleDragStart = (e, task) => {
//     setDraggedTask(task);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, taskBox) => {
//     e.preventDefault();
//     if (draggedTask) {
//       const updatedTasks = tasks.map((task) =>
//         task.id === draggedTask.id ? { ...task, taskBox } : task
//       );
//       setTasks(updatedTasks);
//       setDraggedTask(null);
//     }
//   };

//   const addTask = () => {
//     if (taskContent) {
//       const newTask = {
//         id: Math.max(...tasks.map((task) => task.id), 0) + 1,
//         content: taskContent,
//         taskBox: "Unplanned",
//       };
//       setTasks([...tasks, newTask]);
//       setTaskContent("");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Drag and Drop Tasks</h1>
//       <div className="main-header">
//         <input
//           value={taskContent}
//           onChange={(e) => setTaskContent(e.target.value)}
//           className="input"
//           type="text"
//           placeholder="Add new task"
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="main">
//         {taskBoxes.map((taskBox) => (
//           <div
//             key={taskBox}
//             className="TaskBox"
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, taskBox)}
//           >
//             <h2>{taskBox}</h2>
//             {tasks
//               .filter((task) => task.taskBox === taskBox)
//               .map((task) => (
//                 <div
//                   key={task.id}
//                   className="task"
//                   draggable
//                   onDragStart={(e) => handleDragStart(e, task)}
//                 >
//                   {task.content}
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
