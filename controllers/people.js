const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPerson = (req, res) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name!" });
  res.status(200).json({ person: req.body.name });
};

const deletePerson = (req, res) => {
  const id = Number(req.params.id);
  person = people.find((p) => p.id === id);

  if (!person)
    return res
      .status(404)
      .json({ success: false, msg: `No object with the id: ${id}` });

  const newPeople = people.filter((p) => p.id !== id);
  console.log(newPeople);

  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  postPerson,
  deletePerson,
};
