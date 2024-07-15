import BoardLayout from "@/app/components/Layouts/BoardLayout";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BoardLayout bgcolor="#BBC2C0">{children}</BoardLayout>;
}
