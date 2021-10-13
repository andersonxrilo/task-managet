import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./css/App.css";

const App = ()=>{
  const [tasks,setTasks] = useState(
    [{
      id: '1',
      title: "Estudar Programação",
      completed: false,
    },{
      id: "2",
      title: "ler livros",
      completed: true
    }]
  );
  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [...tasks,{
      title: taskTitle,
      id:uuidv4(),
      completed:false
    }]
    setTasks(newTasks)
  }
  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
     
    </>);
}

export default App;