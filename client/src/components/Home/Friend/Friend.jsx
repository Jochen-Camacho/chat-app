import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import SideBarListItem from "../SideBar/SideBarListItem";
import { Button } from "@/components/ui/button";

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
  {
    id: 4,
    title: "Chat 4",
  },
  {
    id: 4,
    title: "Chat 4",
  },
];
const Friend = () => {
  return (
    <div className="p-2 flex flex-col">
      <div className="flex items-center gap-2 px-2">
        <div className="flex-shrink-0">
          <div className="bg-black rounded-full w-full h-20 aspect-square"></div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-5xl truncate">John Carter</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap  gap-2 p-6">
        <div className="flex gap-2">
          <p className="text-xl">First Name:</p>
          <p className="text-xl">John</p>
        </div>
        <div className="flex gap-2">
          <p className="text-xl">Last Name:</p>
          <p className="text-xl">Carter</p>
        </div>
        <div>
          <p className="text-xl mt-4 mb-2">Chats</p>
          <ScrollArea className="flex flex-col  max-h-[160px] ">
            {chats.map((c) => (
              <div
                key={c.id}
                className="flex justify-between items-center mb-2"
              >
                <SideBarListItem title={c.title} />
              </div>
            ))}
          </ScrollArea>
        </div>
        <div className="flex gap-2 mt-8 self-end">
          <Button>New Chat</Button>
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
