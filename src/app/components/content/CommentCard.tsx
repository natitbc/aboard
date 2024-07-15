import React from "react";
import Image from "next/image";
import { getTimeAgo } from "@/app/utils/script";

interface CommentCardProps {
  id: number;
  auther: {
    id: number;
    name: string;
    img: string;
  };
  content: string;
  timeStamp: string;
}



export default function CommentCard(props: CommentCardProps) {
  const { id, auther, content, timeStamp } = props;

  const time = getTimeAgo(timeStamp);


  return (
    <div>
      <div className="flex gap-[10px] mb-2 pt-6 items-center">
        <Image src="/img/icon-user.svg" alt="avatar" width={40} height={40} className="rounded-full bg-[#F3F3F3] p-2"></Image>
        <h4 className="text-black-board-500 font-medium">{auther.name}</h4>
        <p className="text-gray-board-300 font-light text-sm">{time}</p>
      </div>
      <p className="ps-[50px] text-black-board-500">{content}</p>
    </div>
  );
}
