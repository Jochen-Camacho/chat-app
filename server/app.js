const express = require("express");
const cors = require("cors");
const { errorHandler, tokenExtractor } = require("./util/middleware");
const userRouter = require("./controller/users");
const messageRouter = require("./controller/messages");
const chatRouter = require("./controller/chats");
const friendRouter = require("./controller/friends");
const loginRouter = require("./controller/login");

const app = express();
app.use(express.json());
app.use(cors());
app.use(tokenExtractor);

app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);
app.use("/api/chats", chatRouter);
app.use("/api/friends", friendRouter);
app.use("/api/login", loginRouter);

app.use(errorHandler);

module.exports = app;
