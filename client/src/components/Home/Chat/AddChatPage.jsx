import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import AddMember from "./AddMember";
import SideBarListItem from "../SideBar/SideBarListItem";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const friends = [
  {
    id: 1,
    name: "John Carter",
  },
  {
    id: 2,
    name: "John Carter",
  },
  {
    id: 3,
    name: "John Carter",
  },
  {
    id: 4,
    name: "John Carter",
  },
  {
    id: 5,
    name: "John Carter",
  },
  {
    id: 6,
    name: "John Carter",
  },
];

const AddChatPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="p-2 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-4xl">New Chat</h1>
      <div className="flex flex-col gap-4">
        <Input placeholder={"Chat Name"} {...register("chatName")} />
        <h2 className="text-2xl mt-2">Add Members</h2>
        <AddMember />
      </div>
      <ScrollArea className="flex flex-col  max-h-[220px] ">
        {friends.map((f) => (
          <div key={f.id} className="flex justify-between items-center mb-2">
            <SideBarListItem title={f.name} />
            <Button variant={"ghost"} className="hover:bg-transparent">
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
