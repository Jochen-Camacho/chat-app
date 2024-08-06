const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../util/db");

class UserFriend extends Model {}

UserFriend.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
      primaryKey: true,
    },
    friendId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["pending", "accepted", "denied"],
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: "user_friend",
    hooks: {
      beforeValidate: (instance) => {
        if (instance.userId > instance.friendId) {
          [instance.userId, instance.friendId] = [
            instance.friendId,
            instance.userId,
          ];
        }
        if (instance.isNewRecord) {
          instance.status = "pending";
        }
      },
    },
    indexes: [
      {
        unique: true,
        fields: ["user_id", "friend_id"],
        name: "unique_friendship",
      },
    ],
  }
);

module.exports = UserFriend;
