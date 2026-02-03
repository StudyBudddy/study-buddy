import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/todos.js";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.use(express.static(path.join(__dirname, "public")));

// ✅ NEW SETUP (Notice the object structure { apiKey: ... })
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // ✅ USE 'gemini-2.0-flash' OR 'gemini-2.5-flash'
    // 'gemini-pro' and 'gemini-1.5-flash' are retired in 2026
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite", // Updated model
      contents: [{ role: "user", parts: [{ text: message }] }], // Correct 2026 array format
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error("🔥 ERROR:", error);
    res.status(500).json({ reply: "⚠️ AI service is currently unavailable." });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Study Buddy active at http://localhost:${PORT}`);
});
