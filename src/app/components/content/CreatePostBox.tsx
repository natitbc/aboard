import React from "react";
import CategoryDropdown from "@/app/components/board/CategoryDropdown";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Button } from "@/app/components/ui/Button";


export default function CreatePostBox(props:any) {
  return (
    <div className="absolute right-0 top-0 h-screen w-full z-20 bg-opacity-60 bg-[#000]">
      <div className="w-[685px] p-[30px] bg-white mx-auto mt-[100px] bg-[#fff] rounded-lg">
        <h3 className="text-black-board-500 font-semibold text-lg">
          Create Post
        </h3>
        <CategoryDropdown />
        <input
          type="text"
          placeholder="Title"
          className="w-full border border-solid border-gray-board-100 hover:border-purple-500  focus:border-purple-500  bg-white text-slate-900 focus-visible:outline-0 box-border mb-2 py-[10px] px-[14px] rounded-lg"
        />
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="What’s on your mind..."
          minRows={10}
          className="w-full text-gray-board-500 text-sm font-normal font-sans leading-normal p-3 rounded-xl rounded-br-none  border border-solid border-gray-board-100 hover:border-purple-500  focus:border-purple-500  bg-white text-slate-900 focus-visible:outline-0 box-border mb-[10px]"
        />
        <div className="flex justify-end gap-[12px]">
          <Button type="secondary" onClick={props.handleCancel} >
            Cancel
          </Button>
          <Button type="primary" onClick={props.handlePost}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
