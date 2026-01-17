import express from "express";
import dotenv from "dotenv";

// import db from "./db.js";

import authRoutes from "./routes/auth.js";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

if (!process.env.PORT) {
  console.log("Please create a .env file and define the PORT!");
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Study buddy running on http://localhost:${process.env.PORT}`);
});
