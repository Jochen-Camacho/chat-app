import React from "react";

const Message = ({ content, userId, space = true }) => {
  return (
    <div
      className={`flex w-full ${space ? "mt-2" : "mb-0"}  ${
        userId === 1 ? "justify-end" : "justify-start"
      }`}
    >
      {userId !== 1 && (
        <div className="bg-gray-500 w-4 h-4 self-end translate-x-2 rounded-tl-full rounded-br-full  rotate-6"></div>
      )}
      <div
        className={`w-fit  flex gap-2 relative  max-w-[200px] px-2 py-1 rounded-md text-white z-10 ${
          userId === 1 ? "bg-green-900" : "bg-gray-500"
        }`}
      >
        {content}
        <p className="text-xs self-end text-gray-300">10:00</p>
      </div>
      {userId === 1 && (
        <div className="bg-green-900 w-4 h-4 self-end -translate-x-2 rounded-bl-full rounded-tr-full  -rotate-6"></div>
      )}
    </div>
  );
};

export default Message;
