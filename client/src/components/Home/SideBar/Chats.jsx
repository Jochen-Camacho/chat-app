import React, { useEffect, useState } from "react";
import SideBarListItem from "./SideBarListItem";
import { Link } from "react-router-dom";
import chatsService from "../../../services/chats";

const Chats = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    chatsService
      .getUserChats()
      .then((data) => {
        setChats(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Link to={"/chat"}>
        <SideBarListItem title={"New Chat"} />
      </Link>
      {chats.map((c) => (
        <SideBarListItem
          key={c.id}
          title={c.name}
          time={"10:00"}
          lastMessage={"Sender: Last Message"}
        />
      ))}
    </div>
  );
};

export default Chats;
