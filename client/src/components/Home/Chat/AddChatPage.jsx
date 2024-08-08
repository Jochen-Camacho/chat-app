import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import friendService from "../../../services/friends";
import chatsService from "../../../services/chats";
import { useForm } from "react-hook-form";
import AddMember from "./AddMember";
import SideBarListItem from "../SideBar/SideBarListItem";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const AddChatPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [members, setMembers] = useState([]);
  const onSubmit = async (data) => {
    try {
      const response = await chatsService.createChat({
        name: data.chatName,
        users: members.map((m) => m.id),
      });
      console.log(response);
      reset();
      setMembers([]);
    } catch (error) {}
  };
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

  const handleAddMember = (friend) => {
    setMembers(members.concat(friend));
  };

  return (
    <form className="p-2 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-4xl">New Chat</h1>
      <div className="flex flex-col gap-4">
        <Input placeholder={"Chat Name"} {...register("chatName")} />
        <h2 className="text-2xl mt-2">Add Members</h2>
        <AddMember
          members={members}
          friends={friends}
          handleAddMember={handleAddMember}
        />
      </div>
      <ScrollArea className="flex flex-col  max-h-[220px] ">
        {members.map((m) => (
          <div key={m.id} className="flex justify-between items-center mb-2">
            <SideBarListItem title={m.username} />
            <Button
              variant={"ghost"}
              className="hover:bg-transparent"
              onClick={(e) => {
                e.preventDefault();
                setMembers(members.filter((currM) => currM.id !== m.id));
              }}
            >
              <X />
            </Button>
          </div>
        ))}
      </ScrollArea>
      <Button className="rounded-full max-w-[150px] mt-4 self-center w-full">
        Create
      </Button>
    </form>
  );
};

export default AddChatPage;
