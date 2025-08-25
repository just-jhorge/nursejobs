"use client";

import Image from "next/image";
import mentorship from "@/public/images/mentorship.jpg";
import { Button } from "@/components/ui/button";

export default function Mentorship() {
  return (
    <section className="w-full py-0 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="w-full bg-blue-950 text-primary-foreground rounded-none md:rounded-lg p-12">
          <div className="flex items-center gap-12">
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
        </div>
      </div>
    </section>
  );
}
