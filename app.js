const express = require("express");
const app = express();

const people = require("./routes/people");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/people", people);

app.all("*", (req, res) => {
  res.status(404).send("Resource not found!");
});
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
