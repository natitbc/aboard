import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import CommentCounter from "../ui/CommentCounter";

export interface TopicCardProps {
  id: number;
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
  comments?: {
    [x: string]: any;
    id: number;
    auther: {
      id: number;
      name: string;
      img: string;
    };
    content: string;
    timeStamp: string;
  }
}

export default function TopicCard(props: TopicCardProps) {
  const { title, description, auther, tag, commentNum, descType } = props;

  return (
    <>
      <div className="w-full bg-[#fff] p-5 ps-0 border-b-2 border-gray-board-100 first-of-type:rounded-t-[12px] last-of-type:rounded-b-[12px first-of-type:border-b-0 last-of-type:border-b-0">
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
        <div className="my-2 mb-[28px]">
          <Link href={`/posts/${props.id}`}>
            <h3 className="text-black-board-500 font-semibold text-[28px] mb-4">
              {title}
            </h3>
          </Link>
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
