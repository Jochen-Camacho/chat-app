import React from "react";

const SideBarListItem = ({ title, time, lastMessage }) => {
  return (
    <div className="flex items-center gap-2 px-2">
      <div className="flex-shrink-0">
        <div className="bg-black rounded-full w-full h-12 aspect-square"></div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl truncate">{title}</h3>
          {time && <p className="text-neutral-600">{time}</p>}
        </div>

        {lastMessage && (
          <p className="text-neutral-600 text-left truncate">{lastMessage}</p>
        )}
      </div>
    </div>
  );
};

export default SideBarListItem;
