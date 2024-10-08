const Sequelize = require("sequelize");
const { DATABASE_URL } = require("./config");

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();

    console.log("connected to the database");
  } catch (err) {
    console.log("failed to connect to the database");
    console.log(err);
    return process.exit(1);
  }
};

module.exports = {
  sequelize,
  connectToDatabase,
};
