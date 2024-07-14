"use client";

import Link from "next/link";
import style from "./Button.module.scss";

interface ButtonProps {
  type?: "primary" | "secondary";
  html?: "button" | "a" | "submit" | "reset";
  link?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const buttonType = (): string => {
    let btnMain = `py-[10px] w-[105px] text-center justify-center`;
    switch (props.type) {
      case "primary":
        return (
          btnMain + "text-white bg-success hover:bg-green-board-300 rounded-md"
        );
      case "secondary":
        return (
          btnMain +
          "text-green-board-300 bg-green-board-100 hover:bg-green-board-200 border border-green-board-300 rounded-md"
        );
      default:
        return "text-green-board-300 bg-green-board-100 hover:bg-green-board-200";
    }
  };
  const className = props.className ? " " + props.className : "";

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
