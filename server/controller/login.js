const jwt = require("jsonwebtoken");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const { SECRET } = require("../util/config");
const router = require("express").Router();

router.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "username incorrect" });
    }

    const passwordCorrect = bcrypt.compare(password, user.passwordHash);

    if (!passwordCorrect)
      return res.status(401).json({ error: "password incorrect" });

    const userForToken = {
      username: user.username,
      id: user.id,
    };

    const token = jwt.sign(userForToken, SECRET);

    res.status(200).json({
      token,
      username,
      firstName: user.firstname,
      lastName: user.lastName,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
