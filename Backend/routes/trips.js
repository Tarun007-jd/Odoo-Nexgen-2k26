import express from "express";
import pool from "../db/connection.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/trips/save
router.post("/save", verifyToken, async (req, res) => {
  const { destination, budget, mood, plan } = req.body;
  const userId = req.user.id;

  if (!destination || !budget || !mood || !plan) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO trips (user_id, destination, budget, mood, plan_json) VALUES (?, ?, ?, ?, ?)",
      [userId, destination, budget, mood, JSON.stringify(plan)]
    );

    res.status(201).json({
      message: "Trip saved successfully.",
      tripId: result.insertId,
    });
  } catch (err) {
    console.error("Save trip error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

// GET /api/trips/my
router.get("/my", verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM trips WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    const trips = rows.map((trip) => ({
      ...trip,
      plan_json: JSON.parse(trip.plan_json),
    }));

    res.json({ trips });
  } catch (err) {
    console.error("Get trips error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

// DELETE /api/trips/:id
router.delete("/:id", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const tripId = req.params.id;

  try {
    const [result] = await pool.query(
      "DELETE FROM trips WHERE id = ? AND user_id = ?",
      [tripId, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Trip not found." });
    }

    res.json({ message: "Trip deleted successfully." });
  } catch (err) {
    console.error("Delete trip error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
