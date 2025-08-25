"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

export default function NavbarClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full h-14 sm:h-16 transition-colors duration-300 ${
        pathname === "/"
          ? scrolled
            ? "bg-background shadow text-foreground"
            : "bg-transparent text-white"
          : "bg-background shadow text-foreground"
      }`}
    >
      {children}
    </nav>
  );
}
