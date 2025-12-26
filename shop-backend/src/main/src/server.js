const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Shop Backend is running 🚀");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Murukulu", price: 500 },
    { id: 2, name: "Sunnundalu", price: 600 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
