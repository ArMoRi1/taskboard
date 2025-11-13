import { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project documentation",
      status: "In Progress",
      category: "Work"
    },
    {
      id: 2,
      title: "Study React hooks",
      status: "Planned",
      category: "Study"
    },
    {
      id: 3,
      title: "Buy groceries",
      status: "Done",
      category: "Personal"
    },
    {
      id: 4,
      title: "Prepare presentation",
      status: "In Progress",
      category: "Work"
    },
  ]);

  const [categories, setCategories] = useState([
    { 
      id: 1, 
      name: 'Work',
      color: '#8B5CF6' // фіолетовий
    },
    { 
      id: 2, 
      name: 'Study',
      color: '#F59E0B' // жовтий
    },
    { 
      id: 3, 
      name: 'Personal',
      color: '#EC4899' // рожевий
    }
  ]);

  const [statuses, setStatuses] = useState([
    { 
      id: 1, 
      name: 'Planned',
      color: '#6B7280' // сірий
    },
    { 
      id: 2, 
      name: 'In Progress',
      color: '#3B82F6' // синій
    },
    { 
      id: 3, 
      name: 'Done',
      color: '#10B981' // зелений
    }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addCategory = (category) => {
    setCategories([...categories, { 
      ...category, 
      id: Date.now()
    }]);
  };

  const addStatus = (status) => {
    setStatuses([...statuses, { 
      ...status, 
      id: Date.now()
    }]);
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      categories,
      statuses,
      addTask,
      updateTask,
      deleteTask,
      addCategory,
      addStatus
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within TaskProvider');
  }
  return context;
}