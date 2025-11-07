import { useState } from 'react';
import TaskListItem from './TaskListItem';

function TaskList() {
  // Mock дані для тестування
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
    // TODO: відкрити TaskModal для редагування
  };

  const handleDelete = (id) => {
    console.log('Delete task:', id);
    // Видаляємо задачу
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="px-8 py-6">
      <div className="max-w-4xl mx-auto">
        {tasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tasks yet. Create your first task!</p>
          </div>
        ) : (
          <div className="space-y-3">
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