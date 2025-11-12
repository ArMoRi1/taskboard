import { useState, useEffect } from 'react';

const TaskModal = ({ isOpen, onClose, onSave, task = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    status: 'Planned',
    category: 'Work'
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        status: task.status,
        category: task.category
      });
    } else {
      setFormData({
        title: '',
        status: 'Planned',
        category: 'Work'
      });
    }
  }, [task, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: task ? task.id : Date.now(),
      ...formData
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border-2 border-purple-200">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">
            {task ? 'Edit Task' : 'Create New Task'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Task Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter task title..."
              required
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors bg-white"
            >
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors bg-white"
            >
              <option value="Work">Work</option>
              <option value="Study">Study</option>
              <option value="Personal">Personal</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 text-gray-700 font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors border-2 border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all shadow-lg"
            >
              {task ? 'Save Changes' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;