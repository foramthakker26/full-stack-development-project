const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    route: "/api/users",
    users: [{ id: 1, name: "Foram" }, { id: 2, name: "Student" }]
  });
});

router.get("/:id", (req, res) => {
  res.json({ success: true, message: `User ID received: ${req.params.id}` });
});

module.exports = router;