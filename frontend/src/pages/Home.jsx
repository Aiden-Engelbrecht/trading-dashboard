import { useEffect, useState } from "react";
import Header from "../components/Header";
import MarketCard from "../components/MarketCard";
import api from "../services/api";

export default function Home() {
  const [market, setMarket] = useState(null);

  useEffect(() => {
    api
      .get("/market")
      .then((response) => setMarket(response.data))
      .catch(console.error);
  }, []);

  if (!market) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Header />

      <div className="container">
        <div className="market-grid">
          <MarketCard
            title="Gold"
            value={`$${market.gold}`}
          />

          <MarketCard
            title="Bitcoin"
            value={`$${market.bitcoin}`}
          />

          <MarketCard
            title="EUR/USD"
            value={market.eurusd}
          />

          <MarketCard
            title="Market"
            value="OPEN"
          />
        </div>

        <div className="dashboard-sections">
          <div className="panel">
            <h2>📈 Trading Chart</h2>

            <p style={{ marginTop: 20 }}>
              TradingView chart coming next...
            </p>
          </div>

          <div className="panel">
            <h2>⭐ Watchlist</h2>

            <ul style={{ marginTop: 20, lineHeight: "2" }}>
              <li>XAU/USD</li>
              <li>BTC/USD</li>
              <li>EUR/USD</li>
            </ul>
          </div>
        </div>

        <p className="updated">
          Updated: {market.updated}
        </p>
      </div>
    </>
  );
}