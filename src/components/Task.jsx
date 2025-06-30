
import {useState,useEffect} from "react"
import Input from "./Input"
import Card from "./card"
import About from "./About"
const Task=()=>{
const[taskList,setTaskList]=useState([])
const handleNewTask=async(newTask)=>{
  const body={
    task_id:newTask.id,
    task_name:newTask.text,
  };
  await fetch("http://localhost:2356",{method:"POST", headers: {"Content-Type": "application/json"}, body:JSON.stringify(body)});
  await handleGetTasks();
    // console.log("Parent", newTask)
   // setTaskList([newTask])
   
  }
  const handleDelete=async (id)=>{
    await fetch("http://localhost:2356/"+id,{
      method:"DELETE",
    });
    await handleGetTasks();
    // setTaskList((prev)=>prev.filter(task=>task.id!==id))
  }
  const handleGetTasks=async ()=>{
    const response=await fetch("http://localhost:2356");
    const data=await response.json();
    setTaskList(
      data.map((item)=>({
        id:item.task_id,
        text:item.task_name})));
    console.log(data);
  };
  useEffect(()=>{
    handleGetTasks();
  },[]);
  return(<>
    {/* <div >  */}
    <header>
    <h2>
        TOOOOOO-DOOOOO🫠</h2>
    </header>
    {/* <main> */}
      <div id="tasks">
        <Input onAddTask={handleNewTask}/>
        {/* <Input taskList={taskList} setTaskList={setTaskList}/> */}
      
      
      {/* <p>{initialTask[0].text}</p>  
      <p>{initialTask[1].text}</p> */}
      {taskList.map((task, id)=>{
        return(
          <Card key = {id} props={task} onDelete={handleDelete}/>
          // <Card/>
        
        );
      })}
      </div>
    {/* </main> */}
    {/* </div> */}
    </>
  )
}

export default Task































































































































































































































































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     Hello World..
//     </>
//   )
// }

// export default App