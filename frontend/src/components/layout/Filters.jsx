import { useState } from 'react';

function Filters() {
  const [status, setStatus] = useState('All');
  const [category, setCategory] = useState('All');

  const statuses = ['All', 'Planned', 'In Progress', 'Done'];
  const categories = ['All', 'Work', 'Study', 'Personal'];

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex gap-6 items-center">
        {/* Status Filter */}
        <div className="flex items-center gap-3">
          <label htmlFor="status" className="text-sm font-medium text-gray-700">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                       cursor-pointer"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3">
          <label htmlFor="category" className="text-sm font-medium text-gray-700">
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                       cursor-pointer"
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
  );
}

export default Filters;