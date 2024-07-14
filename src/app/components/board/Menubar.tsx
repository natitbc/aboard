import React from "react";
import { Button } from "../ui/Button";
import Searchbox from "./Searchbox";
import CategoryDropdown from "./CategoryDropdown";

export default function Menubar() {
  return (
    <div className="flex flex-row justify-between gap-[20px]">
      <div className="w-[535px]">
        <Searchbox />
      </div>
      <div className="flex gap-4">
        <CategoryDropdown />
        <Button type="primary" html="a" link="/signin">
          Create +
        </Button>
      </div>
    </div>
  );
}
