const { Chat, UserChat, User } = require("../models");
const { info } = require("../util/logger");
const { userExtractor } = require("../util/middleware");
const router = require("express").Router();

router.get("/", userExtractor, async (req, res, next) => {
  try {
    const userChats = await UserChat.findAll({
      where: {
        userId: req.user.id,
      },
    });

    const chatPromises = userChats.map(async (uc) => {
      return await Chat.findByPk(uc.dataValues.chatId, {
        include: {
          model: User,
          attributes: { exclude: ["passwordHash", "userChat"] },
          through: { attributes: [] },
        },
      });
    });

    const chats = await Promise.all(chatPromises);

    res.json(chats);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const chat = await Chat.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: { exclude: ["passwordHash"] },
        through: { attributes: [] },
      },
    });
    res.json(chat);
  } catch (error) {
    next(error);
  }
});

router.post("/", userExtractor, async (req, res, next) => {
  try {
    const userIds = [...req.body.users, req.user.id];
    const newChat = await Chat.create({ name: req.body.name });
    const userChatPromises = userIds.map(async (uid) => {
      return await UserChat.create({ userId: uid, chatId: newChat.id });
    });
    await Promise.all(userChatPromises);
    res.json({ name: newChat.name });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const chat = await Chat.findByPk(req.params.id);
    await chat.destroy();
    res
      .status(204)
      .json({ response: `chat ${req.params.id} deleted successfully` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
