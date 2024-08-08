import axios from "axios";

let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvY2hlbjEyMjIyIiwiaWQiOjE0LCJpYXQiOjE3MjMxNDExMzh9.y5PeqZrR0_BedVUuyTP-PNoaYzlCPk2QoIkyHh7Ic9w";

const login = async (loginData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/login",
      loginData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/users",
      userData
    );
    const loginData = await login({
      username: response.data.username,
      password: userData.password,
    });
    return loginData;
  } catch (error) {
    console.log(error);
  }
};

const setToken = (newToken) => (token = `Bearer ${newToken}`);

export default { login, register, setToken, token };
