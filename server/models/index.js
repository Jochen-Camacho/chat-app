const User = require("./user");
const Message = require("./message");
const Chat = require("./chat");
const UserChat = require("./userChat");
const UserFriend = require("./userFriend");

User.hasMany(Message, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
});

Message.belongsTo(User, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
});

Chat.hasMany(Message, {
  foreignKey: {
    allowNull: false,
    name: "chatId",
  },
});

Message.belongsTo(Chat, {
  foreignKey: {
    allowNull: false,
    name: "chatId",
  },
});

User.belongsToMany(User, {
  through: UserFriend,
  as: "friends",
  foreignKey: "userId",
  otherKey: "friendId",
});

User.belongsToMany(User, {
  through: UserFriend,
  as: "friendsInverse",
  foreignKey: "friendId",
  otherKey: "userId",
});

User.belongsToMany(Chat, { through: UserChat });
Chat.belongsToMany(User, { through: UserChat });

User.sync({ alter: true });
Message.sync({ alter: true });
Chat.sync({ alter: true });
UserChat.sync({ alter: true });
UserFriend.sync({ alter: true });

module.exports = {
  User,
  Message,
  Chat,
  UserChat,
  UserFriend,
};
