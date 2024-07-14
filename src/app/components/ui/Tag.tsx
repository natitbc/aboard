import React from "react";

interface tag {
  key: number;
  text: string;
}

export default function Tag(props: tag) {
  const { text } = props;
  

  return (
    <div>
      <span className="text-black-board-500 bg-[#F3F3F3] px-3 py-1 rounded-full font-light text-xs">
        {text}
      </span>
    </div>
  );
}
