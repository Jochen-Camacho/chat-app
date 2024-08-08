import axios from "axios";
const baseUrl = "http://localhost:3001/api/friends";
import loginService from "./user";

const token = loginService.token;

const config = {
  headers: { Authorization: token },
};

const getFriends = async () => {
  try {
    const response = await axios.get(baseUrl, config);
    return response.data;
  } catch (error) {}
};

const addFriend = async () => {
  try {
  } catch (error) {}
};

export default { getFriends, addFriend };
