import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [market, setMarket] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/market")
      .then((res) => res.json())
      .then((data) => setMarket(data))
      .catch(console.error);
  }, []);

  if (!market) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <h1>📈 Trading Dashboard</h1>

      <div className="card">
        <h2>Gold</h2>
        <p>${market.gold}</p>
      </div>

      <div className="card">
        <h2>Bitcoin</h2>
        <p>${market.bitcoin}</p>
      </div>

      <div className="card">
        <h2>EUR/USD</h2>
        <p>{market.eurusd}</p>
      </div>

      <p>Updated: {market.updated}</p>
    </div>
  );
}

export default App;