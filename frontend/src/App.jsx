
import './App.css'
import Header from "./components/layout/Header.jsx";
import Filters from "./components/layout/Filters.jsx";
import TaskList from "./components/tasks/TaskList.jsx";

function App() {
  
  return (
    <div id="app">
      <Header/>
      <Filters/>
      <TaskList/>
    </div>
  )
}

export default App
