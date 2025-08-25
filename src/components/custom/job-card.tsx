"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Bookmark, Briefcase, Clock } from "lucide-react";

export default function JobCard() {
  return (
    <div className="flex flex-col snap-start h-80 w-80 shrink-0 rounded-md bg-white shadow-sm hover:shadow-md transition duration-300 border border-input space-y-3 p-5">
      <div className="w-full flex-1 space-y-8">
        <div className="w-full flex items-start gap-2">
          <div className="w-full flex items-start gap-2">
            <div className="w-full truncate leading-none">
              <h3 className="w-full truncate text-ellipsis font-bold text-base">
                Registered General Nurse
              </h3>
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-medium text-muted-foreground">
                  Rivia Co
                </p>
                <div className="h-1 w-1 rounded-full bg-black" />
                <p className="text-sm font-medium text-muted-foreground">
                  Dzorwulu, Accra
                </p>
              </div>
            </div>
          </div>
          <Bookmark size={25} className="cursor-pointer" />
        </div>
        <div className="space-y-7">
          <ul className="flex gap-2 *:text-xs *:sm:text-sm *:bg-neutral-100/80 *:px-2 *:py-1 *:rounded-sm">
            <li>Fulltime</li>
            <li>Onsite</li>
            <li>Intermediate</li>
          </ul>
          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center text-xs sm:text-sm">
              <Clock className="h-4 w-4 mr-2" />
              Posted 2 days ago
            </p>
            <p className="flex items-center text-xs sm:text-sm">
              <Briefcase className="h-4 w-4 mr-2" />
              120 applicants
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <p className="font-medium">
        GHC200<span className="text-muted-foreground text-xs">/month</span>
      </p>
    </div>
  );
}
