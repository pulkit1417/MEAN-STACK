const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/add", async (req, res) => {
  const { name, email, age, address, password } = req.body;
  let user = await User.create({
    name,
    email,
    age,
    address,
    password,
  });
  res.send(user);
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

router.put("/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send({});
});

router.delete('/:id', async(req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.send({});
})

module.exports = router;
