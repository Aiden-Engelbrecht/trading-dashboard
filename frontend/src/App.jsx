import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Unable to connect to backend"));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Trading Dashboard</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;