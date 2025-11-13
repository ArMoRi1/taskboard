import { useState, useEffect } from 'react';

const CategoryModal = ({ isOpen, onClose, onSave, category = null }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#8B5CF6');

  useEffect(() => {
    if (category) {
      setName(category.name);
      setColor(category.color || '#8B5CF6');
    } else {
      setName('');
      setColor('#8B5CF6');
    }
  }, [category, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, color };
    console.log('CategoryModal sending:', data);
    onSave(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border-2 border-purple-200">
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-4 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">
            {category ? 'Edit Category' : 'Create New Category'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Work, Study, Personal..."
              required
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose Color
            </label>
            
            <div className="flex flex-col items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-32 rounded-lg cursor-pointer border-4 border-white shadow-lg"
                style={{ colorScheme: 'light' }}
              />
              
              <div className="w-full flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">HEX:</span>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
                      setColor(value);
                    }
                  }}
                  className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm uppercase font-bold text-center"
                  maxLength={7}
                />
              </div>
            </div>
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
              className="flex-1 px-6 py-3 text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-lg transition-all shadow-lg"
            >
              {category ? 'Save Changes' : 'Create Category'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;