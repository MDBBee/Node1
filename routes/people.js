const express = require("express");
const router = express.Router();
const {
  getPeople,
  postPerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", postPerson);

router.delete("/:id", deletePerson);

module.exports = router;
