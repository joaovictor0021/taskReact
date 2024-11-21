import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import Task from "./components/Task"
import Title from "./components/Title"
import {v4} from "uuid"

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem('task')) || []
  );

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  })

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    });
    setTask(newTask)
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter(task => task.id !== taskId)

    setTask(newTask)
  }

  function onCreateNewTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTask([...tasks, newTask])
  }
 

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onCreateNewTask={onCreateNewTask}/>
        <Task tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App
