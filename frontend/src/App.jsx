import { useState, useEffect } from 'react';
import './App.css'
import Header from "./components/layout/Header.jsx";
import Filters from "./components/layout/Filters.jsx";
import TaskList from "./components/tasks/TaskList.jsx";
import TaskModal from "./components/modals/TaskModal.jsx";
import CategoryModal from "./components/modals/CategoryModal.jsx";
import StatusModal from "./components/modals/StatusModal.jsx";
import LoginForm from "./components/auth/LoginForm.jsx";
import RegisterForm from "./components/auth/RegisterForm.jsx";
import * as api from './services/api';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);
  
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const response = await api.getCurrentUser();
      if (!response.error) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const loadData = async () => {
    try {
      const [tasksData, categoriesData, statusesData] = await Promise.all([
        api.getTasks(),
        api.getCategories(),
        api.getStatuses()
      ]);
      setTasks(tasksData || []);
      setCategories(categoriesData || []);
      setStatuses(statusesData || []);
    } catch (error) {
      console.error('Error loading data:', error);
      setTasks([]);
      setCategories([]);
      setStatuses([]);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await api.logout();
    setIsAuthenticated(false);
    setTasks([]);
    setCategories([]);
    setStatuses([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return showLogin 
      ? <LoginForm onSwitchToRegister={() => setShowLogin(false)} onLogin={handleLogin} />
      : <RegisterForm onSwitchToLogin={() => setShowLogin(true)} />;
  }

  const handleCreateTask = () => {
    setEditingTask(null);
    setIsTaskModalOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsTaskModalOpen(true);
  };

  const handleSaveTask = async (taskData) => {
    try {
      if (editingTask) {
        await api.updateTask(editingTask.id, taskData);
      } else {
        await api.createTask(taskData);
      }
      await loadData();
      setIsTaskModalOpen(false);
      setEditingTask(null);
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await api.deleteTask(id);
      await loadData();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleSaveCategory = async (categoryData) => {
    try {
      await api.createCategory(categoryData);
      await loadData();
      setIsCategoryModalOpen(false);
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleSaveStatus = async (statusData) => {
    try {
      await api.createStatus(statusData);
      await loadData();
      setIsStatusModalOpen(false);
    } catch (error) {
      console.error('Error saving status:', error);
    }
  };

  return (
    <div id="app">
      <Header onLogout={handleLogout} />
      <Filters 
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        statuses={statuses}
      />
      <TaskList 
        tasks={tasks}
        categories={categories}
        statuses={statuses}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        selectedStatus={selectedStatus}
        selectedCategory={selectedCategory}
      />

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
        onSave={handleSaveCategory}
      />

      <StatusModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        onSave={handleSaveStatus}
      />

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