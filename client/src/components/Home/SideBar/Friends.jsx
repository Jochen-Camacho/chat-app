import React, { useEffect, useState } from "react";
import SideBarListItem from "./SideBarListItem";
import friendService from "../../../services/friends";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const Friends = ({ friends }) => {
  const [addFriendVisible, setAddFriendVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setAddFriendVisible(!addFriendVisible)}
        variant={"ghost"}
        className="p-0 mt-1 self-start hover:bg-transparent"
      >
        <SideBarListItem title={"Add Friend"} />
      </Button>
      <div
        className={`flex items-center gap-2 px-2 transition-all ease-in-out duration-300 overflow-hidden ${
          addFriendVisible ? "h-12 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <Input placeholder="Enter a username" />
        <Button>Add</Button>
        <Button
          onClick={() => setAddFriendVisible(false)}
          variant={"ghost"}
          className="w-10 p-0 hover:bg-transparent"
        >
          <X />
        </Button>
      </div>

      {friends.map((f) => (
        <SideBarListItem title={f.username} key={f.id} />
      ))}
    </div>
  );
};

export default Friends;
