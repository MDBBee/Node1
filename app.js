const express = require("express");
const path = require("path");
const { people } = require("./data");

const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
app.post("/api/people", (req, res) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name!" });
  res.status(200).json({ person: req.body.name });
});
app.post("/login", (req, res) => {
  res.send(`Welcome ${req.body.name}`);
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found!");
});
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
