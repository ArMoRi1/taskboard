import { useState } from 'react';

function Filters() {
  const [status, setStatus] = useState('All');
  const [category, setCategory] = useState('All'); 
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);
  const [showCategoryTooltip, setShowCategoryTooltip] = useState(false);

  const statuses = ['All', 'Planned', 'In Progress', 'Done'];
  const categories = ['All', 'Work', 'Study', 'Personal'];

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-purple-200 shadow-sm">
      <div className="max-w-4xl mx-auto py-5">
        <div className="flex gap-8 items-center justify-between">
          {/* Status Filter */}
          <div className="flex items-center gap-3">
            <div 
              className="relative"
              onMouseEnter={() => setShowStatusTooltip(true)}
              onMouseLeave={() => setShowStatusTooltip(false)}
            >
              <button 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold 
                         flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
                aria-label="Create Status"
              >
                +
              </button>
              {showStatusTooltip && (
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl z-10">
                  Create Status
                </span>
              )}
            </div>

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

            <label htmlFor="status" className="text-sm font-semibold text-gray-700">
            : Status
            </label>
          </div>

          {/* Category Filter */}
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
            
            <div 
              className="relative"
              onMouseEnter={() => setShowCategoryTooltip(true)}
              onMouseLeave={() => setShowCategoryTooltip(false)}
            >
              <button 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold 
                         flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
                aria-label="Create Category"
              >
                +
              </button>
              {showCategoryTooltip && (
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl z-10">
                  Create Category
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;