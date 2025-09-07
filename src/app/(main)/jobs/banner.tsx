import React from "react";
import { BriefcaseMedical } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-tr from-blue-100/45 to-white py-6">
      <div className="mx-auto max-w-6xl space-y-1 px-4 sm:space-y-2 md:px-0">
        <h1 className="font-bricolage text-2xl font-extrabold tracking-tight sm:text-4xl">
          Find your dream job
        </h1>
        <p className="text-muted-foreground max-w-[21rem] text-sm sm:max-w-[31rem] sm:text-base">
          Looking for jobs? Browse the latest job openings to view &amp; apply
          to the best jobs today!
        </p>
      </div>
      <BriefcaseMedical className="absolute -right-8 -bottom-8 z-10 size-36 -rotate-[22.5deg] text-blue-500/15 sm:right-40 sm:-bottom-32 sm:size-80" />
    </div>
  );
}
