import axios from "axios";
const baseUrl = "http://localhost:3001/api/chats";
import loginService from "./user";

const token = loginService.token;

const config = {
  headers: { Authorization: token },
};

const getUserChats = async () => {
  try {
    const response = await axios.get(baseUrl, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createChat = async (chatData) => {
  try {
    const response = await axios.post(baseUrl, chatData, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default { getUserChats, createChat };
