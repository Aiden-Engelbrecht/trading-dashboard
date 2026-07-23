const news = [
  "Gold climbs after weaker USD.",
  "Bitcoin trades above resistance.",
  "Fed expected to hold interest rates.",
  "EUR/USD remains bullish this week.",
];

export default function NewsPanel() {
  return (
    <div className="panel">
      <h2>📰 Market News</h2>

      <ul className="watchlist">
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}