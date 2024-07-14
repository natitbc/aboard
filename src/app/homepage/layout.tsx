import BoardLayout from "@/app/components/Layouts/BoardLayout";
import React from "react";

import { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BoardLayout>{children}</BoardLayout>;
}
