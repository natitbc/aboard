import React from "react";
import Image from "next/image";
import Tag from "../ui/Tag";
import CommentCounter from "../ui/CommentCounter";

interface TopicCardProps {
  auther: {
    id: number;
    name: string;
    img: string;
  };
  tag: string[];
  title: string;
  description: string;
  commentNum: number;
  descType: "short" | "full";
}

export default function TopicCard(props: TopicCardProps) {
  const { title, description, auther, tag, commentNum, descType } = props;

  return (
    <>
      <div className="w-full bg-[#fff] rounded-md p-5">
        <div className="flex gap-4 mb-4">
          <Image
            src={auther.img}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
          <p className="text-gray-board-300">{auther.name}</p>
        </div>
        {tag.map((tag, idx) => (
          <Tag key={idx} text={tag}></Tag>
        ))}
        <div className="my-2">
          <h3 className="text-black-board-500 font-semibold">{title}</h3>
          {descType === "full" ? (
            <p className="text-black-board-500 text-sm">{description}</p>
          ) : (
            <p className="text-black-board-500 text-sm line-clamp-2">
              {description}
            </p>
          )}
        </div>
        {commentNum > 0 && (
          <CommentCounter number={commentNum}></CommentCounter>
        )}
      </div>
    </>
  );
}
