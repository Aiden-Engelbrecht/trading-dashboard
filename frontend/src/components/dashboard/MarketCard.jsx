export default function MarketCard({ title, value, change }) {
  return (
    <div className="market-card">
      <div className="market-title">{title}</div>

      <div className="market-price">{value}</div>

      <div
        className="market-change"
        style={{
          color: change >= 0 ? "#22c55e" : "#ef4444",
        }}
      >
        {change >= 0 ? "+" : ""}
        {change}%
      </div>
    </div>
  );
}