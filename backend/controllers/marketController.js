const cache = require("../config/cache");
const { getMarketData } = require("../services/marketService");

const getMarket = async (req, res) => {
  try {
    const cached = cache.get("market");

    if (cached) {
      return res.json(cached);
    }

    const data = await getMarketData();

    cache.set("market", data);

    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = {
  getMarket
};