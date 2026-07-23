import { useMarket } from "../../context/MarketContext";

const symbols = [
  {
    name: "Gold",
    symbol: "OANDA:XAUUSD",
  },
  {
    name: "Bitcoin",
    symbol: "BINANCE:BTCUSDT",
  },
  {
    name: "EUR/USD",
    symbol: "FX:EURUSD",
  },
  {
    name: "NASDAQ",
    symbol: "NASDAQ:NDX",
  },
];

export default function WatchlistPanel() {
  const { setSelectedSymbol } = useMarket();

  return (
    <div className="panel">
      <h2>⭐ Watchlist</h2>

      <ul className="watchlist">
        {symbols.map((item) => (
          <li
            key={item.symbol}
            className="watch-item"
            onClick={() => setSelectedSymbol(item.symbol)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}