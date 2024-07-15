"use client";

import Link from "next/link";

interface ButtonProps {
  type?: "primary" | "secondary";
  html?: "button" | "a" | "submit" | "reset";
  link?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  children: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const buttonType = (): string => {
    let btnMain = `py-[10px] min-w-[105px] w-fit text-center justify-center px-4`;
    switch (props.type) {
      case "primary":
        return (
          btnMain + " text-white bg-success hover:bg-green-board-300 rounded-md"
        );
      case "secondary":
        return (
          btnMain +
          " text-success font-medium hover:bg-green-board-200 border border-success rounded-lg"
        );
      default:
        return " text-green-board-300 bg-green-board-100 hover:bg-green-board-200";
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    props.onClick ? props.onClick(e) : false;
  };

  const comp = () => {
    switch (props.html) {
      default:
        return (
          <button
            type="button"
            className={buttonType()}
            onClick={(e) => {
              handleClick(e);
            }}
            disabled={props.disabled}
          >
            {props.children}
          </button>
        );
      case "a":
        return (
          <Link
            href={props.link ? props.link : "#"}
            className={buttonType()}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {props.children}
          </Link>
        );
      case "submit":
        return (
          <button
            type="submit"
            className={buttonType()}
            onClick={(e) => {
              handleClick(e);
            }}
            disabled={props.disabled}
          >
            {props.children}
          </button>
        );
    }
  };

  return comp();
};
