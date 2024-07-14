import React from "react";
import Sidebar from "./Sidebar";
import Menubar from "./Menubar";
import Content from "@/app/components/content/Content";

export default function Board() {
  return (
    <div className="flex bg-green-board-100 flex-row items-start relative w-full h-screen pt-8">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="max-w-[798px] px-4">
        <Menubar />
        <Content />
      </div>
    </div>
  );
}
