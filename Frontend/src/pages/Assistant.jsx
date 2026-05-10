
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Assistant() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const responses = {

    "best places in tamil nadu": "🌴 Top places in Tamil Nadu: Ooty, Kodaikanal, Chennai, Mahabalipuram, Yercaud, Rameswaram and Kanyakumari.",

    "best places in india": "🇮🇳 Top destinations in India: Goa, Manali, Kerala, Jaipur, Kashmir, Andaman and Ladakh.",

    "best international destinations": "🌍 Popular international destinations: Bali, Paris, Dubai, Tokyo, Switzerland and Maldives.",

    "best beach places": "🏖️ Best beach destinations: Goa, Bali, Maldives, Pondicherry and Phuket.",

    "best hill stations": "⛰️ Best hill stations: Ooty, Kodaikanal, Manali, Munnar and Darjeeling.",

    "best honeymoon places": "💑 Best honeymoon destinations: Maldives, Bali, Paris, Switzerland and Kerala.",

    "best budget trip": "💰 Budget-friendly trips: Pondicherry, Goa, Ooty, Jaipur and Gokarna.",

    "best adventure places": "🏔️ Adventure destinations: Manali, Ladakh, Rishikesh, Switzerland and Dubai Desert.",

    "best food destinations": "🍜 Top food destinations: Chennai, Delhi, Tokyo, Bangkok and Paris.",

    "best shopping places": "🛍️ Best shopping cities: Dubai, Bangkok, Chennai, Mumbai and Singapore.",

    "best places for family trip": "👨‍👩‍👧‍👦 Best family destinations: Kerala, Ooty, Singapore, Dubai and Goa.",

    "best places for solo trip": "🎒 Best solo travel places: Bali, Pondicherry, Goa, Manali and Tokyo.",

    "best road trip destinations": "🚗 Great road trip routes: Chennai to Ooty, Manali to Leh and Bangalore to Coorg.",

    "best romantic places": "❤️ Romantic destinations: Paris, Maldives, Bali, Venice and Switzerland.",

    "best places for summer": "☀️ Summer destinations: Ooty, Manali, Shimla, Switzerland and Kodaikanal.",

    "best places for winter": "❄️ Winter destinations: Kashmir, Manali, Switzerland and Ladakh.",

    "best places for weekend trip": "🌟 Weekend getaway places: Pondicherry, Yercaud, Goa and Coorg.",

    "best places near chennai": "📍 Places near Chennai: Mahabalipuram, Pondicherry, Yelagiri and Pulicat Lake.",

    "best places near coimbatore": "🌄 Places near Coimbatore: Ooty, Valparai, Coonoor and Kodaikanal.",

    "best places near bangalore": "🚘 Places near Bangalore: Coorg, Mysore, Ooty and Chikmagalur.",

    "which place is best for relaxation": "🧘 Relaxation destinations: Bali, Kerala, Maldives and Goa.",

    "which place is best for trekking": "🥾 Best trekking places: Manali, Ladakh, Himalayas and Switzerland.",

    "which place is best for luxury travel": "✨ Luxury travel destinations: Dubai, Maldives, Paris and Singapore.",

    "best places for photography": "📸 Photography destinations: Switzerland, Kashmir, Bali and Ooty.",

    "best cultural places": "🏛️ Cultural destinations: Jaipur, Varanasi, Mahabalipuram and Kyoto.",

    "best places for nightlife": "🌃 Nightlife destinations: Goa, Dubai, Bangkok and Mumbai.",

    "best places for nature lovers": "🌿 Nature destinations: Kerala, Ooty, Bali, Switzerland and Munnar.",

    "best islands to visit": "🏝️ Beautiful islands: Maldives, Bali, Andaman and Hawaii.",

    "best waterfalls": "💦 Amazing waterfalls: Athirapally, Courtallam, Niagara and Dudhsagar.",

    "best temple places": "🛕 Temple destinations: Madurai, Rameswaram, Tirupati and Varanasi.",

    "best historical places": "🏰 Historical destinations: Jaipur, Agra, Mahabalipuram and Rome.",

    "best places for bike trip": "🏍️ Bike trip destinations: Ladakh, Manali and Valparai.",

    "best places for friends trip": "👬 Best friends trip destinations: Goa, Manali, Bali and Pondicherry.",

    "best places for new year": "🎉 New Year destinations: Goa, Dubai, New York and Bangkok.",

    "best beaches in tamil nadu": "🏖️ Top Tamil Nadu beaches: Marina Beach, Mahabalipuram and Rameswaram.",

    "best resorts": "🏨 Luxury resorts: Maldives resorts, Bali villas and Kerala backwater resorts.",

    "travel safety tips": "🛡️ Travel safely by carrying ID cards, emergency cash, medicines and booking trusted hotels.",

    "how to plan a trip": "🧳 Plan your trip by selecting destination, setting budget, booking hotels and preparing itinerary.",

    "how to save money while travelling": "💸 Save money by booking early, using public transport and choosing budget hotels.",

    "best time to visit ooty": "🌄 Best time to visit Ooty: October to June.",

    "best time to visit goa": "🏖️ Best time to visit Goa: November to February.",

    "best time to visit kerala": "🌴 Best time to visit Kerala: September to March.",

    "best time to visit dubai": "🌆 Best time to visit Dubai: November to March.",

    "best time to visit bali": "🌺 Best time to visit Bali: April to October.",

    "best foods in tamil nadu": "🍛 Famous Tamil Nadu foods: Dosa, Idli, Pongal, Chettinad Chicken and Jigarthanda.",

    "best airlines": "✈️ Popular airlines: Emirates, Singapore Airlines, IndiGo and Qatar Airways.",

    "best travel apps": "📱 Best travel apps: Google Maps, Booking.com, Airbnb, Skyscanner and MakeMyTrip.",

    "best places for couples": "💕 Best couple destinations: Maldives, Paris, Bali and Ooty.",

    "best places for kids": "🧒 Kid-friendly destinations: Singapore, Disneyland, Kerala and Dubai.",

    "best places to visit at night": "🌙 Night attractions: Dubai Marina, Marina Beach Chennai and Eiffel Tower.",

    "best places to relax": "😌 Relaxing destinations: Kerala, Bali, Maldives and Ooty.",

    "hello": "👋 Hello traveler! Ask me anything about trips, destinations, food, hotels or travel planning.",

  };

  const askAssistant = () => {

    const lowerQuestion = question.toLowerCase().trim();

    if (responses[lowerQuestion]) {

      setAnswer(responses[lowerQuestion]);

    }

    else {

      setAnswer(
        "🤖 Sorry, I do not know that yet. Try asking about destinations, food, travel tips, beaches, hill stations, hotels or trip planning."
      );

    }

  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="px-6 py-16 max-w-5xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0, y:-40 }}
          animate={{ opacity:1, y:0 }}
          className="text-center mb-14"
        >

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI Travel Assistant 🤖
          </h1>

          <p className="text-slate-400 text-lg mt-5">
            Ask travel questions and get instant AI recommendations
          </p>

        </motion.div>

        {/* Assistant Box */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
        >

          <textarea
            rows="4"
            placeholder="Ask anything about travel..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-5 rounded-2xl bg-slate-800 border border-slate-700 outline-none text-lg"
          ></textarea>

          <button
            onClick={askAssistant}
            className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
          >
            Ask AI Assistant ✨
          </button>

        </motion.div>

        {/* Answer */}

        {
          answer && (

            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              className="mt-10 bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold mb-5 text-cyan-400">
                AI Response
              </h2>

              <p className="text-slate-200 text-lg leading-relaxed">
                {answer}
              </p>

            </motion.div>

          )
        }

        {/* Suggested Questions */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Suggested Questions 💡
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {Object.keys(responses).slice(0, 12).map((q, index) => (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-300"
              >
                {q}
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}

export default Assistant;