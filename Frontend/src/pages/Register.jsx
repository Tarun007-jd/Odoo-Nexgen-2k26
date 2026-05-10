import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Register() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">

      <motion.div
        initial={{ opacity:0, scale:0.8 }}
        animate={{ opacity:1, scale:1 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-md shadow-2xl"
      >

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Create Account 🚀
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />

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
            Register
          </button>

        </form>

      </motion.div>

    </div>
  );
}

export default Register;