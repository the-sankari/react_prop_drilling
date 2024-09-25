import React, { useState } from "react";
import "./App.css";
import ParentComponent from "./component/ParentComponent";
import ChildComponent from "./component/ChildComponent";
import GrandChildComponent from "./component/GrandChildComponent";
import TodoForm from "./component/todo/TodoForm";
import TodoList from "./component/todo/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { task, completed: false }]);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>React Props Drilling</h2>
      <div className="todo">
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} />
      </div>
      <div>
        <h3>1. Parent component</h3>
        <ParentComponent />
        <p> Parent component end</p>
      </div>
      <div>
        <h3>2. Child component</h3>
        <ChildComponent />
        <p> Child component end</p>
      </div>
      <div>
        <h3>3. Grand Child component</h3>
        <GrandChildComponent />
        <p> Grand Child component end</p>
      </div>
    </div>
  );
};

export default App;
