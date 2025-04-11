"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import StudentHeader from "./student/Header";
import InvestorHeader from "./investor/Header";
import Footer from "./Footer";
import ScrollProgress from "../ui/ScrollProgress";
import Cursor from "../effects/Cursor";
import { ClerkProvider } from "@clerk/nextjs";

type LayoutProps = {
  children: ReactNode;
  userLogin?: string;
};

export default function Layout({
  children,
  userLogin = "vkhare2909",
}: LayoutProps) {
  const pathname = usePathname();
  const isInvestorRoute = pathname?.includes('/investor') ||
    pathname?.includes('/sign-in/investor') ||
    pathname?.includes('/sign-up/investor');
  useEffect(() => {
    // Update the date time every minute
    const timer = setInterval(() => { }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <ScrollProgress />

      {isInvestorRoute ? <InvestorHeader /> : <StudentHeader />}
      <Cursor />

      <main className="min-h-screen pt-20">{children}</main>

      <Footer />
    </>
  );
}
