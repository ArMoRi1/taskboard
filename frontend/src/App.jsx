
import './App.css'
import Header from "./components/layout/Header.jsx";
import Filters from "./components/layout/Filters.jsx";
import TaskList from "./components/tasks/TaskList.jsx";

function App() {
  
  return (
    <>
      <Header/>
      <Filters/>
      <TaskList/>
    </>
  )
}

export default App
