function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center py-6">
        <h1 className="text-3xl font-bold text-white">My Tasks</h1>
        <p className="text-blue-100 text-sm mt-1">
          Organize your day efficiently
        </p>
      </div>
    </header>
  );
}

export default Header;
