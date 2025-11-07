function TaskListItem({ task, onEdit, onDelete }) {
  // Кольори для статусів
  const statusColors = {
    'Planned': 'bg-gray-100 text-gray-700 border-gray-300',
    'In Progress': 'bg-blue-100 text-blue-700 border-blue-300',
    'Done': 'bg-green-100 text-green-700 border-green-300',
  };

  // Кольори для категорій
  const categoryColors = {
    'Work': 'bg-purple-100 text-purple-700 border-purple-300',
    'Study': 'bg-yellow-100 text-yellow-700 border-yellow-300',
    'Personal': 'bg-pink-100 text-pink-700 border-pink-300',
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      {/* Верхня частина: Title + кнопки */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-gray-800">{task.title}</h3>
        
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Нижня частина: Status + Category */}
      <div className="flex gap-3">
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[task.status]}`}>
          {task.status}
        </span>
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[task.category]}`}>
          {task.category}
        </span>
      </div>
    </div>
  );
}

export default TaskListItem;