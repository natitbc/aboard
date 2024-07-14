"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SidebarLinkProps {
  text: string;
  icon: string;
  url: string;
}

export const SidebarLink = ({ text, icon, url }: SidebarLinkProps) => (
  <li>
    <Link href={url} className="flex flex-row items-center gap-4 py-2 px-3">
      <Image src={`/img/icon-${icon}.svg`} alt={text} width={24} height={24} />
      {text}
    </Link>
  </li>
);
