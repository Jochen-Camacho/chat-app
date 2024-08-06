const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../util/db");

class UserChat extends Model {}

UserChat.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
      primaryKey: true,
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "chats", key: "id" },
      primaryKey: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: "user_chat",
  }
);

module.exports = UserChat;
