"use client";
import React from "react";
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
        setData(data[parseInt(params.id)] || null);
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
      <div className="max-w-[800px] bg-[#fff] h-screen">
        <TopicCard key={parseInt(params.id)} {...data} descType="full" />
        <Button type="secondary">Add Comments</Button>
      </div>
    </>
  );
}
