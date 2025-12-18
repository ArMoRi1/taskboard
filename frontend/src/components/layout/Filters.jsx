function Filters({ selectedStatus, setSelectedStatus, selectedCategory, setSelectedCategory, categories = [], statuses = [] }) {
  const statusOptions = [{ id: 'All', name: 'All' }, ...statuses];
  const categoryOptions = [{ id: 'All', name: 'All' }, ...categories];

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-purple-200 shadow-sm">
      <div className="max-w-4xl mx-auto py-5">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <label htmlFor="status" className="text-sm font-semibold text-gray-700">
              Status:
            </label>
            <select
              id="status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border-2 border-purple-300 rounded-lg bg-white text-gray-700 
                      font-medium shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                      hover:border-purple-400 transition-colors cursor-pointer"
            >
              {statusOptions.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="category" className="text-sm font-semibold text-gray-700">
              Category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border-2 border-purple-300 rounded-lg bg-white text-gray-700 
                      font-medium shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                      hover:border-purple-400 transition-colors cursor-pointer"
            >
              {categoryOptions.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Filters;