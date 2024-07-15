import React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Button } from "@/app/components/ui/Button";

export default function CommentBox(props: any) {
  return (
    <>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="What’s on your mind..."
        minRows={3}
        className="w-full text-gray-board-500 text-sm font-normal font-sans leading-normal p-3 rounded-xl rounded-br-none  border border-solid border-gray-board-100 hover:border-purple-500  focus:border-purple-500  bg-white text-slate-900 focus-visible:outline-0 box-border"
      />
      <div className="flex justify-end gap-[12px]">
        <Button type="secondary" onClick={props.handleCancel}>
          Cancel
        </Button>
        <Button type="primary" onClick={props.handlePost}>Post</Button>
      </div>
    </>
  );
}
