import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { getMyTrips, deleteTrip } from "../api/trips";
import { getMyWishlist, removeFromWishlist } from "../api/wishlist";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeTab, setActiveTab] = useState("trips");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    fetchData();
  }, [user]);

  const fetchData = async () => {
    try {
      const [tripsRes, wishlistRes] = await Promise.all([
        getMyTrips(),
        getMyWishlist(),
      ]);
      setTrips(tripsRes.data.trips);
      setWishlist(wishlistRes.data.wishlist);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTrip = async (id) => {
    try {
      await deleteTrip(id);
      setTrips((prev) => prev.filter((t) => t.id !== id));
    } catch (err) { console.error(err); }
  };

  const handleRemoveWishlist = async (id) => {
    try {
      await removeFromWishlist(id);
      setWishlist((prev) => prev.filter((w) => w.id !== id));
    } catch (err) { console.error(err); }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-3xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl font-bold shadow-lg shadow-cyan-500/20">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-4xl font-bold">{user.name}</h1>
              <p className="text-slate-400 text-lg mt-1">{user.email}</p>
            </div>
          </div>

          <div className="flex gap-10 text-center">
            <div>
              <p className="text-4xl font-bold text-cyan-400">{trips.length}</p>
              <p className="text-slate-400 mt-1">Trips Planned</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400">{wishlist.length}</p>
              <p className="text-slate-400 mt-1">Wishlisted</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              to="/planner"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              + New Trip
            </Link>
            <button
              onClick={() => { logout(); navigate("/"); }}
              className="bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-3 rounded-xl hover:bg-red-500/20 transition font-semibold"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {["trips", "wishlist"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-2xl text-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {tab === "trips" ? `✈️ My Trips (${trips.length})` : `❤️ Wishlist (${wishlist.length})`}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-slate-400 text-xl py-20">Loading your data...</div>
        ) : activeTab === "trips" ? (
          trips.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-2xl mb-6">No trips saved yet!</p>
              <Link
                to="/planner"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
              >
                Plan Your First Trip ✨
              </Link>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trips.map((trip, i) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400">{trip.destination}</h3>
                      <p className="text-slate-400 mt-1">{trip.mood} • ₹{trip.budget}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteTrip(trip.id)}
                      className="text-red-400 hover:text-red-300 text-xl hover:scale-110 transition"
                      title="Delete trip"
                    >
                      🗑️
                    </button>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {trip.plan_json?.slice(0, 2).map((day, j) => (
                      <li key={j} className="bg-slate-800/50 rounded-xl p-3">
                        <span className="text-cyan-400 font-semibold">{day.day}:</span>{" "}
                        {day.activities[0]}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 text-xs mt-4">
                    Saved on {new Date(trip.created_at).toLocaleDateString()}
                  </p>
                </motion.div>
              ))}
            </div>
          )
        ) : (
          wishlist.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-2xl mb-6">Your wishlist is empty!</p>
              <Link
                to="/explore"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
              >
                Explore Destinations 🌍
              </Link>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.destination_name}
                      className="w-full h-44 object-cover"
                    />
                  )}
                  <div className="p-5 flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.destination_name}</h3>
                      <p className="text-slate-400 text-sm mt-1">{item.destination_type}</p>
                      <p className="text-cyan-400 font-bold mt-2">{item.price}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveWishlist(item.id)}
                      className="text-red-400 hover:text-red-300 text-xl hover:scale-110 transition"
                      title="Remove"
                    >
                      🗑️
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )
        )}

      </div>
    </div>
  );
}

export default Dashboard;
