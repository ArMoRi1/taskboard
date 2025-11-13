import { useState } from 'react';
import './App.css'
import Header from "./components/layout/Header.jsx";
import Filters from "./components/layout/Filters.jsx";
import TaskList from "./components/tasks/TaskList.jsx";
import TaskModal from "./components/modals/TaskModal.jsx";
import CategoryModal from "./components/modals/CategoryModal.jsx";
import StatusModal from "./components/modals/StatusModal.jsx";
import { useTasks } from './contexts/TaskContext.jsx';

function App() {
  const { addTask, updateTask, addCategory, addStatus, categories, statuses } = useTasks();
  
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleCreateTask = () => {
    setEditingTask(null);
    setIsTaskModalOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsTaskModalOpen(true);
  };

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      updateTask(taskData);
    } else {
      addTask(taskData);
    }
    setIsTaskModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div id="app">
      <Header onCreateTask={handleCreateTask} />
      <Filters />
      <TaskList onEditTask={handleEditTask} />

      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setEditingTask(null);
        }}
        onSave={handleSaveTask}
        task={editingTask}
        categories={categories}
        statuses={statuses}
      />

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSave={(data) => {
          addCategory(data);
          setIsCategoryModalOpen(false);
        }}
      />

      <StatusModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        onSave={(data) => {
          addStatus(data);
          setIsStatusModalOpen(false);
        }}
      />

      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600"
          onClick={handleCreateTask}
        >
          + Task
        </button>
        
        <button
          onClick={() => setIsStatusModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
        >
          + Status
        </button>

        <button
          onClick={() => setIsCategoryModalOpen(true)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600"
        >
          + Category
        </button>
      </div>
    </div>
  );
}

export default App;