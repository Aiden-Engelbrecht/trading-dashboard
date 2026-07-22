const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

app.get("/api/market", async (req, res) => {
  try {
    const [gold, bitcoin, eurusd] = await Promise.all([
      axios.get(
        `https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${API_KEY}`
      ),
      axios.get(
        `https://api.twelvedata.com/price?symbol=BTC/USD&apikey=${API_KEY}`
      ),
      axios.get(
        `https://api.twelvedata.com/price?symbol=EUR/USD&apikey=${API_KEY}`
      )
    ]);

    res.json({
      gold: gold.data.price,
      bitcoin: bitcoin.data.price,
      eurusd: eurusd.data.price,
      updated: new Date().toLocaleTimeString()
    });
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: error.response?.data || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});