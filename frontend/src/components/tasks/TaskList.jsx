import { useState } from 'react';
import TaskListItem from './TaskListItem';

function TaskList() {
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

  const handleEdit = (task) => {
    console.log('Edit task:', task);
  };

  const handleDelete = (id) => {
    console.log('Delete task:', id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="px-8 py-6 bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {tasks.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-md border-2 border-purple-200">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-600 text-lg font-medium">No tasks yet. Create your first task!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskListItem
                key={task.id}
                task={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;