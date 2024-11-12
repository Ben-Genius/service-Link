// AppLayout.tsx
import type { Metadata } from "next";
import RootLayout from "./layout";

export const metadata: Metadata = {
  title: "ServiceLink",
  description: "Generated by create next app",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
