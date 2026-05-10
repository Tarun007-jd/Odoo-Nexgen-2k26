import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            TravelLoop AI
          </h1>
        </Link>

        <div className="flex gap-8 text-lg items-center">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/explore" className="hover:text-cyan-400 transition">Explore</Link>
          <Link to="/planner" className="hover:text-cyan-400 transition">Planner</Link>
          <Link to="/assistant" className="hover:text-cyan-400 transition">AI Assistant</Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-cyan-400 transition font-semibold text-cyan-300"
              >
                👤 {user.name.split(" ")[0]}
              </Link>
              <button
                onClick={logout}
                className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-xl hover:bg-red-500/20 transition text-base font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-xl text-white font-semibold hover:scale-105 transition"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;