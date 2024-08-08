import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Chats from "./Chats";
import Friends from "./Friends";
import React, { useEffect, useState } from "react";

import friendService from "../../../services/friends";

const SideBar = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    friendService
      .getFriends()
      .then((data) => {
        console.log(data.friends);
        setFriends(data.friends);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="">
      <Tabs defaultValue="chats" className="p-2">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="chats">
            Chats
          </TabsTrigger>
          <TabsTrigger className="w-full" value="friends">
            Friends
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chats">
          <Chats />
        </TabsContent>
        <TabsContent value="friends">
          <Friends friends={friends} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SideBar;
