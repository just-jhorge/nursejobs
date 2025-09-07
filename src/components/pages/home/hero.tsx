"use client";

import React from "react";
import Image from "next/image";
import { Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import nurseBanner from "@/public/images/nurse_banner.jpg";

export default function Hero() {
  return (
    <header className="relative h-[65svh] py-14 sm:py-16 md:h-[85svh]">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={nurseBanner}
          alt="smiling_nurse"
          className="h-full w-full object-cover object-top"
        />
        {/* overlay for better readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* text content */}
      <div className="relative z-10 mx-auto h-full max-w-6xl px-4 text-white md:px-0">
        <div className="flex h-full max-w-3xl flex-col items-center justify-center text-center md:items-start md:text-left">
          <div className="mb-2 flex items-center gap-2">
            <Verified className="size-6 fill-[#FFD700] text-black" />
            <p className="text-xs font-medium md:text-base">
              Approved by Nursing and Midwifery Council, Ghana
            </p>
          </div>
          <h1 className="mb-2 text-3xl font-black md:mb-4 md:text-6xl">
            Find Your Next Healthcare Opportunity
          </h1>
          <p className="mb-6 text-lg md:text-2xl">
            Connecting nurses, midwives, and healthcare workers with jobs,
            mentorship and growth.
          </p>
          <div className="space-x-3">
            <Button
              size="lg"
              className="rounded-lg bg-blue-600 px-6 py-2 font-medium hover:bg-blue-700"
            >
              Find Jobs
            </Button>
            <Button
              size="lg"
              className="rounded-lg bg-white px-6 py-2 font-medium text-blue-600 hover:bg-gray-100"
              variant="outline"
            >
              Post a Job
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
