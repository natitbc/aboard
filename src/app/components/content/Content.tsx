import { timeStamp } from "console";
import React from "react";
import TopicCard from "./TopicCard";

const MOCK_TOPICDATA = [
  {
    id: 1,
    auther: {
      id: 1,
      name: "Jhon",
      img: "/img/avatar-01.png",
    },
    tag: ["history"],
    title: "The Beginning of the End of the World",
    description:
      "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.",
    commentNum: 32,
    timeStamp: "2022-01-01 12:00:00",
  },
  {
    id: 2,
    auther: {
      id: 2,
      name: "Zach",
      img: "/img/avatar-01.png",
    },
    tag: ["history"],
    title: "The Big Short War",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    commentNum: 4,
    timeStamp: "2022-01-02 12:00:00",
  },
];

export default function Content() {
  return (
    <>
      <div className="w-full bg-[#fff] rounded-md">
        {MOCK_TOPICDATA.map((topic) => (
          <TopicCard key={topic.id} descType="short" {...topic}  />
        ))}
      </div>
    </>
  );
}
