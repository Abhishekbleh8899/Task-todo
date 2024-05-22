import './App.css';
import TaskColumn from './components/TaskColumn';
import Taskform from './components/Taskform'
import todoIcon from "./assets/direct-hit.png"
import doingIcong from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import { useState , useEffect } from 'react';
const oldTasks= localStorage.getItem("task")
console.log(oldTasks)
const App = () => {
  const [task, setTask] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);
  const onDrop = (status , position)=>{
    console.log(`${activeCard} is going to place into ${status} and at the position ${position}`)
    if(activeCard == null || activeCard==undefined) return;
    const taskToMove= task[activeCard];
    const updatedTask=task.filter((task , index)=>index != activeCard)
    updatedTask.splice(position , 0 , {
      ...taskToMove, status: status
    })
    setTask(updatedTask)
  }
  useEffect(() => {
    
    localStorage.setItem("task" , JSON.stringify(task))
  }, [task]);
  const handleDelete = (taskIndex)=>{
   const newTask= task.filter((task , index)=> index !== taskIndex)
   setTask(newTask)
  }
  // console.log(task)
  return (
    <div className="app">
      <Taskform setTask={setTask} />
    
      <main className="app_main">
        <TaskColumn title="To Do" icon={todoIcon} task={task} status="todo" handleDelete={handleDelete}  setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn title="Doing" icon={doingIcong} task={task} status="doing" handleDelete={handleDelete}  setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn title="Done" icon={doneIcon} task={task} status="done"  handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />

        
      </main>
    </div>
  )
}

export default App