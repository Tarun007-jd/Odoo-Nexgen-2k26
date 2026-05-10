import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen text-white">

      <Navbar />

      <div className="flex flex-col items-center justify-center text-center px-6 py-28">

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          className="text-8xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Travel Smarter <br />
          With AI
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.5 }}
          className="mt-8 text-xl text-slate-300 max-w-3xl leading-relaxed"
        >
          Plan personalized journeys, explore trending destinations,
          and experience intelligent travel assistance with TravelLoop AI.
        </motion.p>

        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:1 }}
          className="mt-12 flex gap-6"
        >

          <Link
            to="/planner"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
          >
            Start Planning
          </Link>

          <Link
            to="/explore"
            className="border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/10 transition"
          >
            Explore
          </Link>

        </motion.div>

      </div>

    </div>

  );
}

export default Home;