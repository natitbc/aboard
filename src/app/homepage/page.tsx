"use client";

import React from "react";
import Menubar from "@/app/components/board/Menubar";
import Content from "@/app/components/content/Content";
import CreatePostBox from "@/app/components/content/CreatePostBox";
import { useState } from "react";

export default function page() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  function handleOpenPost() {
    setIsCreatePostOpen(true);
  }

  function handleCancel() {
    setIsCreatePostOpen(false);
  }

  function handlePost() {
    setIsCreatePostOpen(false);
  }

  return (
    <>
      <Menubar handleOpenPost={handleOpenPost} />
      <Content />
      {isCreatePostOpen && <CreatePostBox handleCancel={handleCancel} handlePost={handlePost} />}
    </>
  );
}
