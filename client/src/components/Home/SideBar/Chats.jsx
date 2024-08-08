import React from "react";
import SideBarListItem from "./SideBarListItem";
import { Link } from "react-router-dom";

const chats = [
  {
    id: 1,
    title: "Chat 1",
  },
  {
    id: 2,
    title: "Chat 2",
  },
  {
    id: 3,
    title: "Chat 3",
  },
  {
    id: 4,
    title: "Chat 4",
  },
];

const Chats = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link to={"/chat"}>
        <SideBarListItem title={"New Chat"} />
      </Link>
      {chats.map((c) => (
        <SideBarListItem
          key={c.id}
          title={c.title}
          time={"10:00"}
          lastMessage={"Sender: Last Message"}
        />
      ))}
    </div>
  );
};

export default Chats;
