const { User } = require("../models");
const bcrypt = require("bcrypt");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["passwordHash"] },
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { username, firstName, lastName, password } = req.body;

    const saltRounds = 10;

    if (!(username && password)) {
      return res.status(400).json({
        error: "missing username or password",
      });
    }

    const passwordHash = await bcrypt.hash(password, saltRounds);

    await User.create({
      username,
      firstName,
      lastName,
      passwordHash,
    });

    res.json({ username, firstName, lastName });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
