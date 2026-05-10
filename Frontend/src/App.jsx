import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Dashboard from "./pages/Dashboard";
import TripPlanner from "./pages/TripPlanner";
import Assistant from "./pages/Assistant";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/planner" element={<TripPlanner />} />

        <Route path="/assistant" element={<Assistant />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;