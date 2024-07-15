"use client";

import { timeStamp } from "console";
import React from "react";
import TopicCard, { TopicCardProps } from "./TopicCard";
import { useEffect, useState } from "react";

export default function Content() {
  const [data, setData] = useState<TopicCardProps[]>([]);

  useEffect(() => {
    fetch("/mock_api/alltopic.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full bg-[#fff] rounded-md px-5">
        {data.map((topic) => (
          <TopicCard key={topic.id} {...topic} />
        ))}
      </div>
    </>
  );
}
