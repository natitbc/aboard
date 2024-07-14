"use client";
import * as React from "react";
import clsx from "clsx";
import { Menu as BaseMenu, MenuProps } from "@mui/base/Menu";
import {
  MenuButton as BaseMenuButton,
  MenuButtonProps,
} from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, MenuItemProps } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { useTheme } from "@mui/system";
import Image from "next/image";

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === "light";
}

const menuData = [
  "History",
  "Food",
  "Pets",
  "Health",
  "Fashion",
  "Exercise",
  "Others",
];
export default function CategoryDropdown() {
  // Replace this with your app logic for determining dark mode
  // const isDarkMode = useIsDarkMode();
  const isDarkMode = "";

  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <Dropdown>
        <MenuButton>
          Community{" "}
          <span>
            <Image
              src="/img/icon-chevron-down.svg"
              alt="arrow"
              width={10}
              height={10}
            ></Image>
          </span>
        </MenuButton>
        <Menu>
          {menuData.map((menuItem) => (
            <MenuItem
              key={menuItem}
              onClick={createHandleMenuClick(menuItem)}
              data-testid="menu-item"
            >
              {menuItem}
            </MenuItem>
          ))}
        </Menu>
      </Dropdown>
    </div>
  );
}

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === "function" ? fn(args) : fn;

const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  // Replace this with your app logic for determining dark modes
  const isDarkMode = useIsDarkMode();

  return (
    <BaseMenu
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `${isDarkMode ? "dark" : ""} z-10`,
              resolvedSlotProps?.className
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "bg-[#fff] text-sm box-border w-[320px] font-plex py-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white dark:bg-slate-900 border border-solid border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 min-w-listbox shadow-md dark:shadow-slate-900",
              resolvedSlotProps?.className
            ),
          };
        },
      }}
    />
  );
});

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  (props, ref) => {
    const { className, ...other } = props;
    return (
      <BaseMenuButton
        ref={ref}
        className={clsx(
          "flex items-center gap-[5px] cursor-pointer text-sm min-w-[128px] font-sans box-border rounded-lg font-semibold px-4 py-2 bg-white dark:bg-slate-900 border-0 text-black-board-500 shadow-none  dark:border-slate-700 text-black dark:text-slate-200 hover:bg-slate-50 hover:dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600dark:focus-visible:shadow-[0_0_0_4px_#a78bfa] focus-visible:outline-none active:shadow-none",
          className
        )}
        {...other}
      />
    );
  }
);

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    const { className, ...other } = props;
    return (
      <BaseMenuItem
        ref={ref}
        className={clsx(
          "list-none py-2 px-[14px] cursor-default select-none last-of-type:border-b-0  text-black-board-500 focus:shadow-outline-purple focus:outline-0 focus:bg-green-board-100 focus:dark:bg-slate-800 focus:text-slate-900 focus:dark:text-slate-300 disabled:text-slate-400 disabled:dark:text-slate-700 disabled:hover:text-slate-400 disabled:hover:dark:text-slate-700",
          className
        )}
        {...other}
      />
    );
  }
);
