"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import CommentCard from "@/app/components/content/CommentCard";
import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/Button";

import TopicCard, { TopicCardProps } from "@/app/components/content/TopicCard";

export interface CommentProps {
  id: number;
  auther: {
    id: number;
    name: string;
    img: string;
  };
  content: string;
  timeStamp: string;
}

export default function PostPage({ params }: { params: { id: string } }) {
  const [topic, setTopic] = useState<TopicCardProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/mock_api/alltopic.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setTopic(
          data.find((item: any) => item.id === parseInt(params.id)) || null
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params.id]);

  if (!topic) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="max-w-[800px] bg-[#fff] h-screen ps-[144px]">
        <Link href="/homepage">
          <Image
            src="/img/icon-arrow-right-green.svg"
            alt="back icon"
            width={44}
            height={44}
            className="cursor-pointer rotate-180 bg-green-board-100 rounded-full p-[10px] object-contain h-[44px]"
          ></Image>
        </Link>
        <TopicCard key={parseInt(params.id)} {...topic} descType="full" />
        <Button type="secondary">Add Comments</Button>
        {topic.comments &&
          topic.comments.map((comment: CommentProps) => (
            <CommentCard key={comment.id} {...comment} />
          ))}
      </div>
    </>
  );
}
