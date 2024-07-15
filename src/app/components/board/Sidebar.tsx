import React from "react";
import Image from "next/image";
import {SidebarLink} from "./SidebarLink";

export default function Sidebar() {
  return (
    <nav className="none md:block md:w-[280px] bg-[#BBC2C0]">
      <ul className="text-green-board-500">
        <SidebarLink text="Home" icon="home" url="/homepage" />
        <SidebarLink text="Our Blog" icon="post" url="/ourblogs" />
      </ul>
    </nav>
  );
}
