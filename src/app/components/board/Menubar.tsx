import React from "react";
import { Button } from "../ui/Button";
import Searchbox from "./Searchbox";
import CategoryDropdown from "./CategoryDropdown";

export default function Menubar() {
  return (
    <div className="flex flex-row justify-between gap-[20px] mb-6">
      <div className="w-full">
        <Searchbox />
      </div>
      <div className="gap-4 hidden md:flex">
        <CategoryDropdown />
        <Button type="primary" html="a" link="/signin">
          Create +
        </Button>
      </div>
    </div>
  );
}
