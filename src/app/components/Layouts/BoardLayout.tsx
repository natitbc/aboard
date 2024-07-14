"use client";
// import { Routes } from "@/constants";
// import { userInfo } from "@/lib/frontend/modules/user";
import { redirect, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import BoardSideMenu from "./BoardSideMenu";
import BoardHeader from "./BoardHeader";
import Menubar from "@/app/components/board/Menubar";

function BoardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = await userInfo();

  //     if (!user.data?.userId) {
  //       router.push(Routes.LOGIN);
  //     }
  //     if (user.data?.user?.status === "suspended") {
  //       router.push(`/account-ban?email=${user?.data?.email}`);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <BoardHeader />
      <div
        className={
          "flex bg-green-board-100 flex-row items-start relative w-full h-screen py-8 overflow-y-auto"
        }
      >
        <div className={"hidden md:block"}>
          <BoardSideMenu />
        </div>
        <div className={"max-w-[798px] px-4"}>
          <Menubar />
          {children}
        </div>
      </div>
    </>
  );
}

export default BoardLayout;
