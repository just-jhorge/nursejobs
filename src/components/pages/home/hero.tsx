"use client";

import React from "react";
import Image from "next/image";
import { Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import nurseBanner from "@/public/images/nurse_banner.jpg";

export default function Hero() {
  return (
    <header className="relative py-14 sm:py-16 h-[65svh] md:h-[85svh]">
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
      <div className="relative z-10 max-w-6xl px-4 md:px-0 mx-auto h-full text-white">
        <div className="max-w-3xl h-full flex flex-col text-center md:text-left items-center md:items-start justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Verified className="size-6 text-black fill-[#FFD700]" />
            <p className="font-medium text-xs md:text-base">
              Approved by Nursing and Midwifery Council, Ghana
            </p>
          </div>
          <h1 className="text-3xl md:text-6xl mb-2 md:mb-4 font-black">
            Find Your Next Healthcare Opportunity
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Connecting nurses, midwives, and healthcare workers with jobs,
            mentorship and growth.
          </p>
          <div className="space-x-3">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium"
            >
              Find Jobs
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium"
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
