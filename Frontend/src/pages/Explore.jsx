import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Explore() {

  const destinations = [

    // International

    {
      name: "Bali",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      price: "₹49,999",
      type: "Beach Paradise • Indonesia",
      rating: "4.9",
    },

    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      price: "₹89,999",
      type: "Romantic Experience • France",
      rating: "4.8",
    },

    {
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      price: "₹75,999",
      type: "Luxury Experience • UAE",
      rating: "4.8",
    },

    {
      name: "Tokyo",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      price: "₹99,999",
      type: "Technology & Culture • Japan",
      rating: "4.9",
    },

    // India

    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      price: "₹14,999",
      type: "Beach Experience • India",
      rating: "4.7",
    },

    {
      name: "Manali",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
      price: "₹18,999",
      type: "Mountain Adventure • Himachal",
      rating: "4.8",
    },

    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      price: "₹19,999",
      type: "Backwaters • Kerala",
      rating: "4.9",
    },

    {
      name: "Jaipur",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      price: "₹16,999",
      type: "Royal Heritage • Rajasthan",
      rating: "4.7",
    },

    // Tamil Nadu

    {
      name: "Ooty",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      price: "₹8,999",
      type: "Hill Station • Tamil Nadu",
      rating: "4.9",
    },

    {
      name: "Kodaikanal",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      price: "₹7,999",
      type: "Lake & Nature • Tamil Nadu",
      rating: "4.8",
    },

    {
      name: "Chennai",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
      price: "₹9,999",
      type: "City Life • Tamil Nadu",
      rating: "4.6",
    },

    {
      name: "Mahabalipuram",
      image: "https://images.unsplash.com/photo-1627894483216-2138af692e32",
      price: "₹6,999",
      type: "Historic Temple Town • Tamil Nadu",
      rating: "4.7",
    },

  ];

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-16 px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Explore Destinations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 text-lg mt-5"
        >
          Discover AI-powered travel experiences across the world
        </motion.p>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-10">

          {destinations.map((place, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >

              {/* Image */}
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-72 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h2 className="text-4xl font-bold">
                    {place.name}
                  </h2>

                  <button className="text-red-500 text-3xl hover:scale-125 transition">
                    ♡
                  </button>

                </div>

                <p className="text-slate-400 mt-3 text-lg">
                  {place.type}
                </p>

                {/* Price & Rating */}
                <div className="flex justify-between items-center mt-8">

                  <h3 className="text-3xl font-bold text-cyan-400">
                    {place.price}
                  </h3>

                  <span className="bg-cyan-950 text-cyan-300 px-4 py-2 rounded-full font-semibold">
                    ⭐ {place.rating}
                  </span>

                </div>

                {/* Button */}
                <button className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold hover:scale-105 transition duration-300">
                  Explore Destination
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Explore;