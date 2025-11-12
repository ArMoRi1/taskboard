import { useState } from 'react';
import './App.css'
import Header from "./components/layout/Header.jsx";
import Filters from "./components/layout/Filters.jsx";
import TaskList from "./components/tasks/TaskList.jsx";
import TaskModal from "./components/modals/TaskModal.jsx";
import CategoryModal from "./components/modals/CategoryModal.jsx";
import StatusModal from "./components/modals/StatusModal.jsx";

function App() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  const handleCreateTask = () => {
    setIsTaskModalOpen(true);
  };

  const handleSaveTask = (taskData) => {
    console.log('Task saved:', taskData);
    setIsTaskModalOpen(false);
    // Тут буде логіка збереження завдання
  };

  const handleSaveCategory = (categoryData) => {
    console.log('Category saved:', categoryData);
    setIsCategoryModalOpen(false);
    // Тут буде логіка збереження категорії
  };

  const handleSaveStatus = (statusData) => {
    console.log('Status saved:', statusData);
    setIsStatusModalOpen(false);
    // Тут буде логіка збереження статусу
  };

  return (
    <div id="app">
      <Header onCreateTask={handleCreateTask} />
      <Filters />
      <TaskList />

      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onSave={handleSaveTask}
      />

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSave={handleSaveCategory}
      />

      <StatusModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        onSave={handleSaveStatus}
      />

      {/* Тимчасові кнопки для тестування інших модалок */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <button 
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600"
            onClick={handleCreateTask}
            
          >
            + Task
          </button>
      
        <button
          onClick={() => setIsCategoryModalOpen(true)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600"
        >
          + Category
        </button>
        <button
          onClick={() => setIsStatusModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
        >
          + Status
        </button>
        
      </div>
    </div>
  );
}

export default App;