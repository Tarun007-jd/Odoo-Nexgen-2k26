import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          TravelLoop AI
        </h1>

        <div className="flex gap-8 text-lg">

          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link to="/explore" className="hover:text-cyan-400 transition">
            Explore
          </Link>

          <Link to="/planner" className="hover:text-cyan-400 transition">
            Planner
          </Link>

          <Link to="/assistant" className="hover:text-cyan-400 transition">
            AI Assistant
          </Link>

          <Link to="/login" className="hover:text-cyan-400 transition">
            Login
          </Link>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;