export default function MarketCard({ title, value, change }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{value}</p>

      <small
        style={{
          color: change >= 0 ? "#22c55e" : "#ef4444",
          fontSize: "16px",
        }}
      >
        {change >= 0 ? "+" : ""}
        {change}%
      </small>
    </div>
  );
}