import React from "react";
import { Button } from "@/app/components/ui/Button";

export default function Header() {
  return (
    <>
      <div className="flex justify-between bg-green-board-500 w-full sticky top-0 py-[18px] px-[32px]">
        <h2 className="font-castoro text-2xl">a Board</h2>
        <Button type="primary" html="a" link="/signin">Sign In</Button>
      </div>
    </>
  );
}
