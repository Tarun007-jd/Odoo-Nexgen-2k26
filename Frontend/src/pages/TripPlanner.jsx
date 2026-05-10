import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function TripPlanner() {

  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [mood, setMood] = useState("Relax");

  const [plan, setPlan] = useState([]);
  const [recommendation, setRecommendation] = useState("");

  const generatePlan = () => {

    let aiRecommendation = "";

    if (mood === "Relax") {

      aiRecommendation =
        "🌴 Perfect choice for peaceful beaches, cafes and relaxing sunsets.";

    }

    else if (mood === "Adventure") {

      aiRecommendation =
        "🏔️ Great destination for trekking, adventure sports and exploration.";

    }

    else {

      aiRecommendation =
        "🗺️ Best for city exploration, culture and discovering hidden gems.";

    }

    const generatedPlan = [

      {
        day: "Day 1",
        activities: [
          `✈️ Arrive at ${destination}`,
          "🏨 Hotel Check-in",
          "🌇 Evening city exploration",
          "🍽️ Try local famous food"
        ]
      },

      {
        day: "Day 2",
        activities:
          mood === "Adventure"
            ? [
                "🏔️ Adventure trekking",
                "🚴 Outdoor activities",
                "📸 Photography spots",
                "🔥 Night camping experience"
              ]
            : mood === "Relax"
            ? [
                "🌴 Beach relaxation",
                "☕ Cafe hopping",
                "🧘 Spa & wellness session",
                "🌅 Sunset viewpoint"
              ]
            : [
                "🏛️ Visit famous landmarks",
                "🛍️ Shopping streets",
                "🎭 Cultural experiences",
                "📸 Explore hidden attractions"
              ]
      },

      {
        day: "Day 3",
        activities: [
          `💰 Trip planned within ₹${budget}`,
          "🎁 Local souvenir shopping",
          "🍜 Final food exploration",
          "✈️ Return journey"
        ]
      }

    ];

    setRecommendation(aiRecommendation);
    setPlan(generatedPlan);

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}

      <div className="text-center py-16 px-6">

        <motion.h1
          initial={{ opacity:0, y:-40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          AI Trip Planner
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.4 }}
          className="text-slate-400 text-lg mt-5"
        >
          Generate smart travel itineraries using AI
        </motion.p>

      </div>

      {/* FORM */}

      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-10"
      >

        <div className="grid md:grid-cols-2 gap-6">

          {/* Destination */}

          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none"
          />

          {/* Budget */}

          <input
            type="number"
            placeholder="Budget (₹)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none"
          />

          {/* Mood */}

          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none"
          >

            <option>Relax</option>
            <option>Adventure</option>
            <option>Explore</option>

          </select>

        </div>

        {/* Button */}

        <button
          onClick={generatePlan}
          className="mt-8 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition p-4 rounded-2xl text-lg font-bold"
        >
          Generate AI Plan ✨
        </button>

      </motion.div>

      {/* AI Recommendation */}

      {
        recommendation && (

          <div className="max-w-5xl mx-auto mt-12 bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-4">
              AI Recommendation 🤖
            </h2>

            <p className="text-slate-300 text-lg">
              {recommendation}
            </p>

          </div>

        )
      }

      {/* ITINERARY */}

      {
        plan.length > 0 && (

          <div className="max-w-6xl mx-auto mt-16 pb-20 px-6">

            <h2 className="text-5xl font-bold text-center mb-14">
              Suggested Itinerary 🧳
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {plan.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y:-10 }}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
                >

                  <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                    {item.day}
                  </h3>

                  <ul className="space-y-4 text-slate-300">

                    {item.activities.map((activity, i) => (

                      <li key={i}>
                        {activity}
                      </li>

                    ))}

                  </ul>

                </motion.div>

              ))}

            </div>

            {/* MAP */}

            <div className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h2 className="text-4xl font-bold mb-8 text-center">
                Explore on Map 🌍
              </h2>

              <iframe
                title="map"
                width="100%"
                height="400"
                className="rounded-3xl"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${destination}&output=embed`}
              ></iframe>

            </div>

          </div>

        )
      }

    </div>

  );
}

export default TripPlanner;