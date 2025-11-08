function TaskListItem({ task, onEdit, onDelete }) {
  const statusColors = {
    'Planned': 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 border-slate-300',
    'In Progress': 'bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-700 border-blue-300',
    'Done': 'bg-gradient-to-r from-green-100 to-emerald-200 text-green-700 border-green-300',
  };

  const categoryColors = {
    'Work': 'bg-gradient-to-r from-purple-100 to-violet-200 text-purple-700 border-purple-300',
    'Study': 'bg-gradient-to-r from-amber-100 to-yellow-200 text-amber-700 border-amber-300',
    'Personal': 'bg-gradient-to-r from-pink-100 to-rose-200 text-pink-700 border-pink-300',
  };

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
        <span className={`px-4 py-1.5 text-xs font-semibold rounded-full border-2 shadow-sm ${statusColors[task.status]}`}>
          {task.status}
        </span>
        <span className={`px-4 py-1.5 text-xs font-semibold rounded-full border-2 shadow-sm ${categoryColors[task.category]}`}>
          {task.category}
        </span>
      </div>
    </div>
  );
}

export default TaskListItem;