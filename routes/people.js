const express = require("express");
const router = express.Router();
const {
  getPeople,
  postPerson,
  deletePerson,
  updatePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", postPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
