function Header({ onLogout }) {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white py-6 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Task Manager</h1>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;