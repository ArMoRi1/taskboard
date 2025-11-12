import { useState } from 'react';

function Filters() {
  const [status, setStatus] = useState('All');
  const [category, setCategory] = useState('All');

  const statuses = ['All', 'Planned', 'In Progress', 'Done'];
  const categories = ['All', 'Work', 'Study', 'Personal'];

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-purple-200 shadow-sm">
      <div className="max-w-4xl mx-auto py-5">
        {/* Контейнер з двома блоками */}
        <div className="flex justify-between items-center">
          
          {/* Блок 1 — Status Filter */}
          <div className="flex items-center gap-3">
            <label htmlFor="status" className="text-sm font-semibold text-gray-700">
              Status:
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-2 border-2 border-purple-300 rounded-lg bg-white text-gray-700 
                      font-medium shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                      hover:border-purple-400 transition-colors cursor-pointer"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Блок 2 — Category Filter */}
          <div className="flex items-center gap-3">
            <label htmlFor="category" className="text-sm font-semibold text-gray-700">
              Category:
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border-2 border-purple-300 rounded-lg bg-white text-gray-700 
                      font-medium shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                      hover:border-purple-400 transition-colors cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Filters;
