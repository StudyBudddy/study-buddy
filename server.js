import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

if (!process.env.PORT) {
  console.log("Please create a .env file and define the PORT!");
}

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.listen(process.env.PORT, () => {
  console.log(`Study buddy running on http://localhost:${process.env.PORT}`);
});
