import React from "react";
import { BriefcaseMedical } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative w-full pt-16 md:pt-20 pb-4 bg-gradient-to-tr from-blue-100/45 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-0 space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-4xl font-bricolage font-extrabold tracking-tight">
          Find your dream job
        </h1>
        <p className="max-w-[21rem] sm:max-w-[31rem] text-sm sm:text-base text-muted-foreground">
          Looking for jobs? Browse the latest job openings to view &amp; apply
          to the best jobs today!
        </p>
      </div>
      <BriefcaseMedical className="absolute z-10 -right-8 sm:right-40 -rotate-[22.5deg] -bottom-8 sm:-bottom-32 text-blue-500/15 size-36 sm:size-80" />
    </div>
  );
}
