import React from "react";
import { Button } from "../ui/Button";
import Searchbox from "./Searchbox";
import CategoryDropdown from "./CategoryDropdown";

export default function Menubar(props: any) {
  return (
    <div className="flex flex-row justify-between gap-[20px] mb-6">
      <div className="w-full">
        <Searchbox />
      </div>
      <div className="gap-4 hidden md:flex">
        <CategoryDropdown />
       
        <Button type="primary"  onClick={props.handleOpenPost}>
          Create +
        </Button>
      </div>
    </div>
  );
}
