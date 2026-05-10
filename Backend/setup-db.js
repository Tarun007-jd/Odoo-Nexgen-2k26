// setup-db.js — Run this once to create tables in Railway MySQL
// Usage: node setup-db.js

import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

async function setupDatabase() {
  console.log("🔌 Connecting to Railway MySQL...");
  console.log(`   Host: ${process.env.DB_HOST}:${process.env.DB_PORT}`);
  console.log(`   DB:   ${process.env.DB_NAME}`);

  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
      multipleStatements: true,
    });

    console.log("✅ Connected to Railway MySQL!\n");

    // Read schema
    const schemaPath = join(__dirname, "../DB/schema.sql");
    const schema = readFileSync(schemaPath, "utf8");

    // Remove comment lines for cleaner execution
    const sql = schema
      .split("\n")
      .filter((line) => !line.trim().startsWith("--") && line.trim() !== "")
      .join("\n");

    console.log("📋 Running schema...");
    await connection.query(sql);

    console.log("✅ Tables created successfully!\n");
    console.log("   ✓ users");
    console.log("   ✓ trips");
    console.log("   ✓ wishlists");
    console.log("\n🚀 Database is ready! You can now start the backend.");
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  } finally {
    if (connection) await connection.end();
  }
}

setupDatabase();
