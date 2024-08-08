import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Message from "./Message";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hey",
      userId: 2,
    },
    {
      id: 2,
      content: "Yo Whats up?",
      userId: 1,
    },
    {
      id: 3,
      content: "Nothing Much Hbu",
      userId: 2,
    },
    {
      id: 4,
      content: "I have been good just coding. ",
      userId: 1,
    },
  ]);
  let displayMessages = messages;
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    displayMessages = messages.concat({
      id: messages.length + 1,
      content: data.message,
      userId: 1,
    });
    setMessages(displayMessages);
  };
  return (
    <div className="flex flex-col min-h-[80vh] h-full rounded-md p-2 gap-4">
      <div className="flex-grow bg-white rounded-md p-4">
        <div className="flex flex-col gap-1">
          {messages.map((m, idx) => {
            if (idx === 0 || displayMessages[idx - 1].userId === m.userId) {
              return <Message key={m.id} {...m} space={false} />;
            }

            return <Message key={m.id} {...m} />;
          })}
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 items-center"
      >
        <Input placeholder="Type Something..." {...register("message")} />
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default Chat;
