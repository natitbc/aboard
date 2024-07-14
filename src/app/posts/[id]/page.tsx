"use client";
import React from "react";
// import { useRouter } from "next/router";
import Header from "@/app/components/ui/Header";
import { useEffect, useState } from "react";

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
      <TopicCard key={parseInt(params.id)} {...data} />
    </>
  );
}
