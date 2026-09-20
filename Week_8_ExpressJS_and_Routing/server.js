const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

app.get("/api", (req, res) => {
  res.json({ success: true, message: "Welcome to the Week 8 Express.js API" });
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});