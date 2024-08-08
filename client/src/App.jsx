import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/User/LoginWrapper";
import RegisterForm from "./components/User/RegisterForm";
import LoginForm from "./components/User/LoginForm";
import LoginWrapper from "./components/User/LoginWrapper";
import Home from "./components/Home/Home";
import Chat from "./components/Home/Chat/Chat";
import AddChatPage from "./components/Home/Chat/AddChatPage";
import Friend from "./components/Home/Friend/Friend";

function App() {
  return (
    <div className="min-h-screen h-full">
      <Routes>
        <Route
          path="/login"
          element={
            <LoginWrapper title="Login">
              <LoginForm />
            </LoginWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <LoginWrapper title="Register">
              <RegisterForm />
            </LoginWrapper>
          }
        />
        <Route path="/" element={<Home />}>
          <Route path="chat" element={<AddChatPage />} />
          <Route path="chat/:id" element={<Chat />} />
          <Route path="friend/:id" element={<Friend />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
