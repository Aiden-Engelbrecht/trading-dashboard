import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/", label: "📊 Dashboard" },
    { to: "/watchlist", label: "⭐ Watchlist" },
    { to: "/journal", label: "📖 Journal" },
    { to: "/calendar", label: "📅 Calendar" },
    { to: "/news", label: "📰 News" },
    { to: "/settings", label: "⚙️ Settings" },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>TradeVision</h2>
        <small>v1.0</small>
      </div>

      <nav>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}