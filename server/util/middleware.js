const logger = require("./logger");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../util/config");
const { User } = require("../models");

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return res.status(400).send({
      error: "Casting Error",
    });
  } else if (
    error.name === "SequelizeValidationError" &&
    error.message.includes("userId cannot be null")
  ) {
    return res.status(400).send({
      error: "UserId cannot be null",
    });
  }

  next(error);
};

const tokenExtractor = (req, _, next) => {
  const auth = req.get("authorization");

  if (auth && auth.startsWith("Bearer ")) {
    req.token = auth.replace("Bearer ", "");
  }

  next();
};

const userExtractor = async (req, res, next) => {
  if (!req.token) {
    res.status(401).json({ error: "token missing" });
  }

  try {
    const decodedUser = jwt.verify(req.token, SECRET);

    if (!decodedUser.id) {
      return response.status(401).json({
        error: "token invalid",
      });
    }

    req.user = await User.findByPk(decodedUser.id);
  } catch (error) {
    next(error);
  }

  next();
};

module.exports = {
  errorHandler,
  tokenExtractor,
  userExtractor,
};
