const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    route: "/api/products",
    products: [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Keyboard", price: 1500 }
    ]
  });
});

router.get("/:id", (req, res) => {
  res.json({ success: true, message: `Product ID received: ${req.params.id}` });
});

module.exports = router;