import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Chats from "./Chats";
import Friends from "./Friends";

const SideBar = () => {
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
          <Friends />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SideBar;
