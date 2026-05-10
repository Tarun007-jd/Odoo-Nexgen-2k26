import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">

      <motion.div
        initial={{ opacity:0, scale:0.8 }}
        animate={{ opacity:1, scale:1 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-md shadow-2xl"
      >

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Welcome Back 👋
        </h1>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-4 rounded-xl text-lg font-semibold text-white"
          >
            Login
          </button>

        </form>

        <p className="text-slate-400 text-center mt-6">
          Don’t have an account?
          <span className="text-cyan-400 cursor-pointer ml-2">
            Register
          </span>
        </p>

      </motion.div>

    </div>
  );
}

export default Login;