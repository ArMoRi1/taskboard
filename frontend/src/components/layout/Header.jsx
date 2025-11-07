import { useState } from 'react';

function Header({ onCreateTask }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-white border-b border-gray-200">
      <h1 className="text-3xl font-semibold text-gray-800">Task Board</h1>
      
      <div 
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button 
          className="w-12 h-12 rounded bg-emerald-500 text-white text-3xl flex items-center justify-center 
                     hover:bg-emerald-600 shadow-lg"
          onClick={onCreateTask}
          aria-label="Create Task"
        >
          +
        </button>
        {showTooltip && (
          <span className="absolute -bottom-9 right-0 bg-gray-800 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap shadow-lg">
            Create Task
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;