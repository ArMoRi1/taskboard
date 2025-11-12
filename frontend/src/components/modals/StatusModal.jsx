import { useState, useEffect } from 'react';

const StatusModal = ({ isOpen, onClose, onSave, status = null }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (status) {
      setName(status.name);
    } else {
      setName('');
    }
  }, [status, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: status ? status.id : Date.now(),
      name
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border-2 border-blue-200">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">
            {status ? 'Edit Status' : 'Create New Status'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Planned, In Progress, Done..."
              required
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Current statuses:</span> Planned, In Progress, Done
            </p>
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
              className="flex-1 px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg transition-all shadow-lg"
            >
              {status ? 'Save Changes' : 'Create Status'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StatusModal;