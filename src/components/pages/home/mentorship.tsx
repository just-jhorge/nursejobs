"use client";

import Image from "next/image";
import mentorship from "@/public/images/mentorship.jpg";
import { Button } from "@/components/ui/button";

export default function Mentorship() {
  return (
    <section className="w-full py-0 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-900 rounded-none md:rounded-lg p-12 w-full text-primary-foreground relative overflow-hidden">
          <div className="relative z-40 flex items-center gap-12">
            <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-8">
              <div className="space-y-5">
                <h3 className="font-bold text-lg md:text-2xl">
                  Mentorship and Career Growth
                </h3>
                <p className="max-w-lg text-sm md:text-base text-gray-200">
                  Accelerate your healthcare career with personalized
                  mentorship. Connect with experienced professionals who can
                  guide your journey, share insights, and help you reach your
                  full potential in the healthcare industry.
                </p>
              </div>
              <Button size="lg">Find a Mentor / Become a Mentor</Button>
            </div>
            <div className="hidden md:inline-flex relative w-2/5 overflow-hidden aspect-video rounded-md">
              <Image
                src={mentorship}
                alt="mentorship"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute z-10 -bottom-52 -right-44 h-96 w-96 rounded-full bg-blue-800" />
          <div className="absolute z-30 left-0 right-0 top-0 bottom-0 bg-black/10 backdrop-blur-sm" />
          <div className="absolute z-10 -left-28 sm:-left-20 top-0 sm:top-auto sm:h-96 h-64 sm:w-96 w-64 rounded-full bg-blue-800" />
          <div className="absolute z-20 -left-28 sm:-left-32 top-24 sm:top-10 sm:h-80 h-44 sm:w-80 w-44 rounded-full bg-blue-600/50" />
        </div>
      </div>
    </section>
  );
}
