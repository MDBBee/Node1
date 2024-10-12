const express = require("express");
const router = express.Router();

app.post("/login", (req, res) => {
  res.send(`Welcome ${req.body.name}`);
});
