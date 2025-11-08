import { useState } from 'react';

function Header({ onCreateTask }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-6">
        <div>
          <h1 className="text-3xl font-bold text-white">My Tasks</h1>
          <p className="text-blue-100 text-sm mt-1">Organize your day efficiently</p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button 
            className="w-12 h-12 rounded-full bg-white text-blue-600 text-2xl font-bold flex items-center justify-center 
                       hover:bg-blue-50 hover:shadow-xl transition-all duration-200 shadow-lg"
            onClick={onCreateTask}
            aria-label="Add New Task"
          >
            +
          </button>
          {showTooltip && (
            <span className="absolute -bottom-10 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
              Add New Task
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;