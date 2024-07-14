import React from "react";
import { Button } from "../ui/Button";
import Searchbox from "./Searchbox";
import CategoryDropdown from "./CategoryDropdown";

export default function Menubar() {
  return (
    <div className="flex flex-row">
      <Searchbox />
      <CategoryDropdown />
      <Button type="primary" html="a" link="/signin">
        Create +
      </Button>
    </div>
  );
}
