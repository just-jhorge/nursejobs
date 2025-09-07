import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-svh w-full items-center justify-center">
      <div className="flex h-full w-full">
        <div className="bg-background w-full md:w-[43%]">
          <div className="flex h-full w-full items-center justify-center">
            {children}
          </div>
        </div>
        <div className="hidden w-[57%] bg-black md:block">form</div>
      </div>
    </main>
  );
}
