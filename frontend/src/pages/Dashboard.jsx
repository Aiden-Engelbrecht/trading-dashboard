import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";

import MarketCard from "../components/dashboard/MarketCard";
import TradingChart from "../components/charts/TradingChart";
import WatchlistPanel from "../components/dashboard/WatchlistPanel";
import NewsPanel from "../components/dashboard/NewsPanel";

import api from "../services/api";

export default function Dashboard() {

  const [market, setMarket] = useState(null);

  useEffect(() => {

    loadMarket();

    const interval = setInterval(loadMarket,30000);

    return ()=>clearInterval(interval);

  }, []);

  function loadMarket(){

    api.get("/market")

    .then(res=>setMarket(res.data))

    .catch(console.error);

  }

  if(!market){

    return <h2>Loading...</h2>;

  }

  return (

    <Layout>

      <Header/>

      <div className="dashboard">

        <div className="market-grid">

          <MarketCard

            title="Gold"

            value={`$${market.gold}`}

            change={0.72}

          />

          <MarketCard

            title="Bitcoin"

            value={`$${market.bitcoin}`}

            change={1.82}

          />

          <MarketCard

            title="EUR/USD"

            value={market.eurusd}

            change={-0.11}

          />

          <MarketCard

            title="Market"

            value="OPEN"

            change={0}

          />

        </div>

        <div className="chart-section">

          <TradingChart/>

        </div>

        <div className="bottom-grid">

          <WatchlistPanel/>

          <NewsPanel/>

        </div>

      </div>

    </Layout>

  );

}