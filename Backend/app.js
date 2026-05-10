import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import tripsRoutes from "./routes/trips.js";
import wishlistRoutes from "./routes/wishlist.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, curl)
      if (!origin) return callback(null, true);

      const allowed =
        origin === "http://localhost:5173" ||
        origin === "http://localhost:3000" ||
        origin.endsWith(".vercel.app") ||
        origin === process.env.FRONTEND_URL;

      if (allowed) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ message: "TravelLoop API Running 🚀", status: "ok" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripsRoutes);
app.use("/api/wishlist", wishlistRoutes);

export default app;
