🌍 TravelLoop AI
AI-Powered Smart Travel Planning Platform

TravelLoop AI is a modern full-stack travel planning application designed to simplify trip management using AI-driven recommendations and interactive travel tools. The platform enables users to explore destinations, generate personalized itineraries, and interact with an AI travel assistant through an intuitive and responsive interface.

Built as a hackathon-focused solution, the project demonstrates the integration of modern frontend technologies with backend APIs to create a scalable smart tourism platform.

🚀 Live Deployment

🌐 Application URL
TravelLoop AI Deployment

📌 Key Features
AI Trip Planner
Personalized itinerary generation
Budget-based travel planning
Mood-oriented recommendations
Google Maps destination integration
AI Travel Assistant
Interactive travel support system
40+ predefined travel-related queries
Guidance for international, Indian, and Tamil Nadu destinations
Destination Explorer
International tourist destinations
Indian travel locations
Tamil Nadu tourist attractions
Destination cards with visual previews
Authentication Interface
User Login
User Registration
Dashboard Interface
Modern User Experience
Responsive UI/UX design
Smooth animations using Framer Motion
Tailwind CSS-based styling
Professional hackathon-ready interface

🛠️ Technology Stack
Frontend
Technology	Purpose
React.js	UI Development
Vite	Frontend Build Tool
Tailwind CSS	Styling Framework
Framer Motion	UI Animations
Axios	API Requests
React Router DOM	Routing
Backend
Technology	Purpose
Node.js	Runtime Environment
Express.js	Backend Framework
CORS	Cross-Origin Support
Deployment
Platform	Usage
Vercel	Frontend Hosting

📂 Project Structure
Odoo-Nexgen-2k26-master/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md

⚙️ Installation Guide
1. Clone Repository
git clone https://github.com/your-username/Odoo-Nexgen-2k26.git

▶️ Frontend Setup
cd Frontend
npm install
npm run dev
Frontend Server
http://localhost:5173

▶️ Backend Setup
cd Backend
npm install
node server.js
Backend Server
http://localhost:5000
🔌 API Documentation
Generate Travel Plan
Endpoint
POST /trip
Request Body
{
  "destination": "Ooty",
  "budget": "10000",
  "mood": "Relax"
}
Sample Response
{
  "success": true,
  "trip": {
    "destination": "Ooty",
    "budget": "10000",
    "mood": "Relax",
    "message": "AI trip generated successfully"
  }
}

📄 Available Pages
Home Page
Explore Destinations
AI Trip Planner
AI Assistant
Login Page
Register Page
Dashboard
Google Maps Integration

🌟 Future Enhancements
Real AI API Integration
Live Weather Forecast Support
Hotel Booking Integration
Voice Assistant
Chatbot Functionality
Trip Saving & History
Payment Gateway Integration
MongoDB Database Support

👨‍💻 Project Objective

TravelLoop AI was developed as a smart tourism solution focused on improving travel planning experiences through AI-powered recommendations and intuitive user interaction.

👨‍💻 Developed By
NexGen Team
