require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/bookRouter");
const userRoutes = require("./routes/userRouter");

const app = express();

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error("Connexion à MongoDB échouée :", err));

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://my-star-readin-site-de-notation-de-livres.vercel.app",
    ],
  }),
);
app.use(express.json()); //pour lire req.body en JSON

app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
