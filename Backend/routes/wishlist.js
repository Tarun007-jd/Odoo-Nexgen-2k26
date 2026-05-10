import express from "express";
import pool from "../db/connection.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/wishlist/add
router.post("/add", verifyToken, async (req, res) => {
  const { destination_name, destination_type, price, rating, image } = req.body;
  const userId = req.user.id;

  if (!destination_name) {
    return res.status(400).json({ message: "Destination name is required." });
  }

  try {
    const [existing] = await pool.query(
      "SELECT id FROM wishlists WHERE user_id = ? AND destination_name = ?",
      [userId, destination_name]
    );

    if (existing.length > 0) {
      return res.status(409).json({ message: "Already in wishlist." });
    }

    const [result] = await pool.query(
      "INSERT INTO wishlists (user_id, destination_name, destination_type, price, rating, image) VALUES (?, ?, ?, ?, ?, ?)",
      [userId, destination_name, destination_type, price, rating, image]
    );

    res.status(201).json({ message: "Added to wishlist.", id: result.insertId });
  } catch (err) {
    console.error("Add wishlist error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

// GET /api/wishlist/my
router.get("/my", verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM wishlists WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    res.json({ wishlist: rows });
  } catch (err) {
    console.error("Get wishlist error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

// DELETE /api/wishlist/:id
router.delete("/:id", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const wishlistId = req.params.id;

  try {
    const [result] = await pool.query(
      "DELETE FROM wishlists WHERE id = ? AND user_id = ?",
      [wishlistId, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Wishlist item not found." });
    }

    res.json({ message: "Removed from wishlist." });
  } catch (err) {
    console.error("Delete wishlist error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
