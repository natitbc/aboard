"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/Button";

import TopicCard, { TopicCardProps } from "@/app/components/content/TopicCard";

export default function PostPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<TopicCardProps | null>(null);
  // const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/mock_api/alltopic.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(
          data.find((item: any) => item.id === parseInt(params.id)) || null
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (!data.title || !data.description || !data.auther.name || !data.tag) {
    return <div>Invalid data</div>;
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
        <TopicCard key={parseInt(params.id)} {...data} descType="full" />
        <Button type="secondary">Add Comments</Button>
      </div>
    </>
  );
}
