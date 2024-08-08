import React from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-200 flex flex-col items-center ">
      <div className=" w-full  max-w-[1000px] p-8 flex flex-col gap-8">
        <h1 className="font-bold text-center text-5xl flex-shrink-0">
          Chat App
        </h1>
        <div className=" rounded-lg grid grid-cols-5">
          <div className="col-span-2">
            <SideBar />
          </div>
          <div className="col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
