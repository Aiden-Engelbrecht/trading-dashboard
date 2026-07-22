const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/api/market", (req, res) => {
  res.json({
    gold: 3375.42,
    bitcoin: 119850.63,
    eurusd: 1.1682,
    updated: new Date().toLocaleTimeString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});