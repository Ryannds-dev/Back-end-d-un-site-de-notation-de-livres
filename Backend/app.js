const express = require("express");

const app = express();

app.use((req, res) => {
  res.json({ message: "Test de requête serveur " });
});

module.exports = app;
