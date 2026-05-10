import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser({ email, password });
      login(res.data.token, res.data.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-md shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Welcome Back 👋
        </h1>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 mb-6 text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 disabled:opacity-50 disabled:scale-100 transition p-4 rounded-xl text-lg font-semibold text-white"
          >
            {loading ? "Logging in..." : "Login 🚀"}
          </button>
        </form>

        <p className="text-slate-400 text-center mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-cyan-400 hover:underline ml-1">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;