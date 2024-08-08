import { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

const AddMember = ({ friends, members, handleAddMember }) => {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          {friends.map((f) => (
            <button
              variant={"ghost"}
              className="w-full  cursor-pointer"
              key={f.id}
              disabled={members.find((m) => m.id === f.id)}
              onClick={(e) => {
                e.preventDefault();
                handleAddMember(f);
              }}
            >
              <CommandItem
                className={`w-full  cursor-pointer ${
                  members.find((m) => m.id === f.id)
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                {f.username}
              </CommandItem>
            </button>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default AddMember;
