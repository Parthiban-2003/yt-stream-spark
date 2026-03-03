function Navbar() {
    return (
      <nav className="flex justify-between items-center p-5 shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">WebTechky</h1>
        <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition">
          Subscribe
        </button>
      </nav>
    );
  }
  
  export default Navbar;