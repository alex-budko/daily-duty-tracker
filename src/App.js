
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Appointment',
      day: 'Feb 5th at 2:30PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Play Games',
      day: 'Feb 7th at 4:15PM',
      reminder: true,
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000) + 1
    const newTask = {id, ...task}
    //adds the new task to the array
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    //keeps all tasks that are not a specific id
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title = "Daily Duty Tracker" />
      <AddTask onAdd = {addTask} />
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'No Duties To Show'}
    </div>
  );
}

export default App;