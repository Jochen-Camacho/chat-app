const { Message, User } = require("../models");
const { info } = require("../util/logger");
const { userExtractor } = require("../util/middleware");
const router = require("express").Router();

router.get("/:chatId/", async (req, res, next) => {
  try {
    const messages = await Message.findAll({
      include: {
        model: User,
        attributes: { exclude: ["passwordHash"] },
      },
      where: {
        chatId: req.params.chatId,
      },
    });
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

router.post("/:chatId/", userExtractor, async (req, res, next) => {
  try {
    info(req.params);
    const user = req.user;
    const newMessage = await Message.create({
      ...req.body,
      userId: user.id,
      chatId: req.params.chatId,
    });
    res.json(newMessage);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
