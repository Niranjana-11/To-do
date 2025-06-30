import"./App.css"
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Task from  "./components/Task";
import About from "./components/About";
import Navbar from "./components/Navbar";
const App=()=>{
  return(
  <BrowserRouter>
  <div className="App">
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<Task/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
        </main>
        </div>
        </BrowserRouter>
)};

export default App;




















































































































// import './App.css';
// import {useState} from "react"
// import Input from "./components/Input"
// import Card from "./components/card"
// import About from "./components/About"
// const App=()=>{
  

//   const initialTask=[
//     {text:"My first task",id:0},
//     {text:"My second task",id:1},
//     {text:"My third task",id:2},
//   ];
// initialTask[0].text
// const[taskList,setTaskList]=useState(initialTask)
// const handleNewTask=(newTask)=>{
//     console.log("Parent", newTask)
//    // setTaskList([newTask])
//     setTaskList((prev)=>{
//       //... spread operator
//       return[...prev,newTask]
//     })
//   }
//   const handleDelete=(id)=>{
//     setTaskList((prev)=>prev.filter(task=>task.id!==id))
//   }
//   return(<>
//     <div className="App"> 
//     <header>
//     <h1>
//         TOOOOOO-DOOOOOO🫠</h1>
//     </header>
//     <main>
//       <div id="tasks">
//         <Input onAddTask={handleNewTask}/>
//         {/* <Input taskList={taskList} setTaskList={setTaskList}/> */}
      
      
//       {/* <p>{initialTask[0].text}</p>  
//       <p>{initialTask[1].text}</p> */}
//       {taskList.map((task)=>{
//         return(
//           <Card props={task} onDelete={handleDelete}/>
//           // <Card/>
        
//         );
//       })}
//       </div>
//     </main>
//     </div>
//     </>
//   )
// }

// export default App































































































































































































































































// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //     Hello World..
// //     </>
// //   )
// // }

// // export default App