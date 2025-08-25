"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import JobCard from "@/components/custom/job-card";
import { Button } from "@/components/ui/button";

export default function FeaturedJobs() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollLeft() {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  }

  function scrollRight() {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  }

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg md:text-2xl font-bold">Featured Jobs</h2>
          <Link
            href="/jobs"
            className="flex items-center gap-1 text-sm md:text-base font-medium text-primary"
          >
            See all Jobs <ArrowRight />
          </Link>
        </div>
        <div className="space-y-5">
          <div
            ref={containerRef}
            className="overflow-x-auto snap-x snap-mandatory flex space-x-3 scrollbar-hide"
          >
            {[...new Array(10)].map((_, idx) => (
              <JobCard key={idx} />
            ))}
          </div>
          <div className="hidden md:block w-full text-end space-x-2">
            <Button size="icon" variant="outline" onClick={scrollLeft}>
              <ChevronLeft />
            </Button>
            <Button size="icon" variant="outline" onClick={scrollRight}>
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
