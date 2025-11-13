import TaskListItem from './TaskListItem';
import { useTasks } from '../../contexts/TaskContext';

function TaskList({ onEditTask }) {
  const { tasks, deleteTask } = useTasks();

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
                onEdit={onEditTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;