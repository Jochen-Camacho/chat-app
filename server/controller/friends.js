const { Op } = require("sequelize");
const { User, UserFriend } = require("../models");
const { userExtractor } = require("../util/middleware");
const { info } = require("../util/logger");

const router = require("express").Router();

router.get("/", userExtractor, async (req, res, next) => {
  const userId = req.user.id;
  try {
    let where = {};
    const validStatuses = ["pending", "accepted", "denied"];

    if (req.query.status) {
      if (validStatuses.includes(req.query.status)) {
        where = { ...where, status: req.query.status };
      } else {
        return res.status(404).json({
          error: `Status must be 'accepted', 'pending' or 'denied'.`,
        });
      }
    }

    const user = await User.findOne({
      where: {
        id: userId,
      },
      attributes: { exclude: ["passwordHash"] },
      include: [
        {
          model: User,
          as: "friends",
          attributes: { exclude: ["passwordHash"] },
          through: {
            attributes: ["status"],
          },
        },
        {
          model: User,
          as: "friendsInverse",
          attributes: { exclude: ["passwordHash"] },
          through: {
            attributes: ["status"],
            where,
          },
        },
      ],
    });

    const allFriends = [...user.friends, ...user.friendsInverse];

    const userWtihAllFriends = {
      ...user.toJSON(),
      friends: allFriends,
    };

    delete userWtihAllFriends.friendsInverse;

    res.json(userWtihAllFriends);
  } catch (error) {
    next(error);
  }
});

router.post("/", userExtractor, async (req, res, next) => {
  try {
    const { friendId } = req.body;
    const user = req.user;
    info(user);
    const friend = await User.findByPk(friendId);

    if (!user) return res.status(400).json({ error: "user does not exist" });
    if (!friend)
      return res.status(400).json({ error: "friend does not exist" });

    const friendRequest = await UserFriend.create({
      userId: user.id,
      friendId: friend.id,
    });

    res.json(friendRequest);
  } catch (error) {
    next(error);
  }
});

router.put("/", userExtractor, async (req, res, next) => {
  try {
    const { friendId, status } = req.body;
    const user = req.user;
    const friend = await User.findByPk(friendId);

    if (!user) return res.status(400).json({ error: "user does not exist" });
    if (!friend)
      return res.status(400).json({ error: "friend does not exist" });

    const friendRequest = await UserFriend.findOne({
      where: {
        [Op.or]: [
          { userId: user.id, friendId: friendId },
          { userId: friendId, friendId: user.id },
        ],
      },
    });

    friendRequest.status = status;
    await friendRequest.save();

    res.json(friendRequest);
  } catch (error) {
    next(error);
  }
});

router.delete("/", userExtractor, async (req, res, next) => {
  try {
    const { friendId } = req.body;
    const user = req.user;
    const friend = await User.findByPk(friendId);

    if (!user) return res.status(400).json({ error: "user does not exist" });
    if (!friend)
      return res.status(400).json({ error: "friend does not exist" });

    const friendRequest = await UserFriend.findOne({
      where: {
        [Op.or]: [
          { userId: user.id, friendId: friendId },
          { userId: friendId, friendId: user.id },
        ],
      },
    });

    await friendRequest.destroy();

    res.status(204).json({ message: "Friend Removed" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
