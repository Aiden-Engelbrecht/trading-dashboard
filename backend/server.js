const express = require("express");
const cors = require("cors");
require("dotenv").config();

const marketRoutes = require("./routes/marketRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/market", marketRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});