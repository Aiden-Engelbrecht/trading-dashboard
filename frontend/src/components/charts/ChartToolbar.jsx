import { useState } from "react";

export default function ChartToolbar({ onSymbolChange }) {
  const [symbol, setSymbol] = useState("OANDA:XAUUSD");

  const search = () => {
    if (symbol.trim() !== "") {
      onSymbolChange(symbol);
    }
  };

  return (
    <div className="chart-toolbar">
      <input
        type="text"
        placeholder="Search Symbol..."
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <button onClick={search}>
        Search
      </button>

      <div className="timeframes">
        <button>1m</button>
        <button>5m</button>
        <button>15m</button>
        <button>1H</button>
        <button>4H</button>
        <button>1D</button>
      </div>
    </div>
  );
}