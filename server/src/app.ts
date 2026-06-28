import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import Contact from "./models/contact.model";
import sequelize from "./config/database";
import contactRoutes from "./routes/contact.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (_req, res) => {
  res.send("Growth Aura Backend Running");
});

// Routes
app.use("/api/contact", contactRoutes);

// Database Connection
sequelize
  .authenticate()
  .then(async () => {
    console.log("MySQL Connected Successfully");

try {
  console.log("Starting sync...");

  await sequelize.sync({ alter: true });

  console.log("Contact Table Ready");
} catch (err) {
  console.error("SYNC ERROR =>", err);
}

console.log("Contact Model Loaded");
  })
  .catch((err) => {
    console.error("Database Connection Error:", err);
  });

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});