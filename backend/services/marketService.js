async function getMarketData() {
  return {
    gold: 3378.25,
    bitcoin: 118450.72,
    eurusd: 1.1694,
    updated: new Date().toLocaleTimeString()
  };
}

module.exports = {
  getMarketData
};