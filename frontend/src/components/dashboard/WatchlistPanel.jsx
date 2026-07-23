import { useMarket } from "../../context/MarketContext";

const watchlist = [
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
    name: "GBP/USD",
    symbol: "FX:GBPUSD",
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

        {watchlist.map((item) => (

          <li
            key={item.symbol}
            onClick={() => setSelectedSymbol(item.symbol)}
            className="watch-item"
          >
            {item.name}

          </li>

        ))}

      </ul>

    </div>
  );
}