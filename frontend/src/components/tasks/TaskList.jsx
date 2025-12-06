import TaskListItem from './TaskListItem';

function TaskList({ tasks, categories, statuses, onEditTask, onDeleteTask, selectedStatus, selectedCategory }) {
  const filteredTasks = tasks.filter(task => {
    const statusMatch = selectedStatus === 'All' || task.status === selectedStatus;
    const categoryMatch = selectedCategory === 'All' || task.category === selectedCategory;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="px-8 py-6 bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-md border-2 border-purple-200">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-600 text-lg font-medium">No tasks found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <TaskListItem
                key={task.id}
                task={task}
                categories={categories}
                statuses={statuses}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;