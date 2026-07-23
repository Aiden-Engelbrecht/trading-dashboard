import { useEffect, useState } from "react";

import Header from "../components/Header";
import Layout from "../components/Layout";
import MarketCard from "../components/MarketCard";
import TradingChart from "../components/TradingChart";

import api from "../services/api";

export default function Home() {
  const [market, setMarket] = useState(null);

  const watchlist = [
    "XAU/USD",
    "BTC/USD",
    "EUR/USD",
    "GBP/USD",
    "USD/JPY",
  ];

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
    <Layout>
      <Header />

      <div className="container">
        <div className="market-grid">
          <MarketCard
            title="Gold"
            value={`$${market.gold}`}
            change={0.72}
          />

          <MarketCard
            title="Bitcoin"
            value={`$${market.bitcoin}`}
            change={1.85}
          />

          <MarketCard
            title="EUR/USD"
            value={market.eurusd}
            change={-0.12}
          />

          <MarketCard
            title="Market"
            value="OPEN"
            change={0}
          />
        </div>

        <div className="dashboard-sections">
          <div className="panel">
            <h2>📈 Trading Chart</h2>

            <TradingChart />
          </div>

          <div className="panel">
            <h2>⭐ Watchlist</h2>

            <ul className="watchlist">
              {watchlist.map((symbol) => (
                <li key={symbol}>{symbol}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="updated">
          Updated: {market.updated}
        </p>
      </div>
    </Layout>
  );
}