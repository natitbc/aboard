import React from "react";
import Image from "next/image";

export default function Searchbox() {
  return (
    <>
      <div className="relative w-full border border-[#fff] bg-transparent py-2 px-5 rounded-md">
        <Image
          src="/img/icon-search.svg"
          alt="search"
          className="absolute top-1/2 -translate-y-1/2"
          width={20}
          height={20}
        ></Image>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[transparent] ps-6 font-plex font-light focus:outline-0"
        />
      </div>
    </>
  );
}
