import React from "react";
import {SidebarLink} from "@/app/components/board/SidebarLink";

export default function Sidebar() {
  return (
    <nav className="none md:block md:w-[280px]">
      <ul className="text-green-board-500">
        <SidebarLink text="Home" icon="home" url="/homepage" />
        <SidebarLink text="Our Blog" icon="post" url="/ourblogs" />
      </ul>
    </nav>
  );
}
