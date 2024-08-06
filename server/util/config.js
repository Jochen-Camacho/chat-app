require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
const SECRET = process.env.SECRET;

module.exports = {
  PORT: process.env.PORT || 3001,
  DATABASE_URL,
  SECRET,
};
