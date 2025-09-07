import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-[calc(100dvh-4rem)]">{children}</main>
      <Footer />
    </div>
  );
}
