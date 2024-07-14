import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/Button";

export default function SigninPage() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="absolute flex bg-green-board-300 flex-col items-center justify-center h-[376px] rounded-b-[36px] z-10 w-full md:right-0 md:w-[632px] md:h-screen">
          <Image
            src="/img/img-01.png"
            alt="logo"
            width={172}
            height={132}
          ></Image>
          <h1 className="mt-7 font-castoro text-2xl">a Board</h1>
        </div>
        <div className="flex bg-green-board-500 flex-col items-center relative w-full h-screen pt-[400px] md:items-start ">
          <div className="md:w-[calc(100%-632px)]">
            <form action="" className="flex flex-col md:w-[384px] md:mx-auto">
              <h2 className="mb-[40px]">Signin</h2>
              <input
                type="text"
                id="Username"
                name="Username"
                placeholder="Username"
                className="mb-5 rounded-md px-[14px] py-[10px]"
              />
              <Button html="submit" type="primary">
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
