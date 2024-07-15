"use client";
// import { Routes } from "@/constants";
// import { userInfo } from "@/lib/frontend/modules/user";
import { redirect, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import BoardSideMenu from "./BoardSideMenu";
import BoardHeader from "./BoardHeader";

function BoardLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
  bgcolor: string;
}) {
  const router = useRouter();
  const { bgcolor } = props;

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
        className={`flex bg-[${bgcolor}] flex-row items-start relative w-full  overflow-y-auto`}
      >
        <div className={"hidden md:block"}>
          <BoardSideMenu />
        </div>
        <div className={"max-w-[798px] px-4 py-8 overflow-hidden"}>{children}</div>
      </div>
    </>
  );
}

export default BoardLayout;
