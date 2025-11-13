import { useTasks } from '../../contexts/TaskContext';

function TaskListItem({ task, onEdit, onDelete }) {
  const { categories, statuses } = useTasks();

  const getStatusColor = (statusName) => {
    const status = statuses.find(s => s.name === statusName);
    return status?.color || '#6B7280';
  };

  const getCategoryColor = (categoryName) => {
    const category = categories.find(c => c.name === categoryName);
    return category?.color || '#8B5CF6';
  };

  const statusColor = getStatusColor(task.status);
  const categoryColor = getCategoryColor(task.category);

  return (
    <div className="bg-white border-2 border-purple-200 rounded-xl p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="px-4 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200 hover:border-blue-300"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="px-4 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-red-200 hover:border-red-300"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <span 
          className="px-4 py-1.5 text-xs font-semibold rounded-full border-2 shadow-sm"
          style={{ 
            backgroundColor: statusColor + '33',
            color: statusColor,
            borderColor: statusColor
          }}
        >
          {task.status}
        </span>
        <span 
          className="px-4 py-1.5 text-xs font-semibold rounded-full border-2 shadow-sm"
          style={{ 
            backgroundColor: categoryColor + '33',
            color: categoryColor,
            borderColor: categoryColor
          }}
        >
          {task.category}
        </span>
      </div>
    </div>
  );
}

export default TaskListItem;