"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobCard from "@/components/custom/job-card";

export default function FeaturedJobs() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="leading-tight mb-5">
          <h2 className="text-lg md:text-3xl font-bold">Featured Jobs</h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Discover &amp; apply to some featured jobs
          </p>
        </div>
        <div className="overflow-x-auto pb-5 scrollbar-hide">
          <div className="flex gap-4 w-max">
            {[...new Array(10)].map((_, idx) => (
              <JobCard key={idx} />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button size="lg">
            See all jobs
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
