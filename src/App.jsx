import { useState } from "react";
import TaskInput from "./cooponents/TaskInput";
import TaskItem from "./cooponents/taskItem";

function App() {
  const [toDoList, setTodoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setTodoList(toDoList.filter(task => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setTodoList(prevToDoList =>
      prevToDoList.map(task =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <>
      <div className="container">
        <h1>Task master</h1>
        <TaskInput addTask={addTask} />

        <div className="toDoList">
          <span>Do List</span>
          <ul className="list-items">
            {toDoList.map((task, index) => (
              <TaskItem
                task={task}
                key={index}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
                toggleCheck ={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 && (
            <p className="notify">You are done!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;