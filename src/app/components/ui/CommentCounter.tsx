import React from "react";
import Image from "next/image";

interface commentProps {
  number: number;
}

export default function CommentCounter(props: commentProps) {
  return (
    <div className="flex gap-[5px] text-gray-board-300 font-light text-sm">
      <Image
        src={"/img/icon-comment.svg"}
        alt="comment icon"
        width={16}
        height={16}
      ></Image>
      <span>{props.number} Comments</span>
    </div>
  );
}
