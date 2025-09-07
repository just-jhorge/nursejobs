"use client";

import Link from "next/link";
import { Separator } from "../ui/separator";
import { Bookmark, Briefcase, Clock, Eye } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/utils/format-currency";
import { formatNumber } from "@/utils/format-number";

export default function JobCard() {
  return (
    // <div className="flex flex-col snap-start h-80 w-80 shrink-0 rounded-md bg-white shadow-sm hover:shadow-md transition duration-300 border border-input space-y-3 p-5">
    //   <div className="w-full flex-1 space-y-8">
    //     <div className="w-full flex items-start gap-2">
    //       <div className="w-full flex items-start gap-2">
    //         <div className="w-full truncate leading-none">
    //           <Link
    //             href={`/jobs/job-slug`}
    //             className="w-full truncate text-ellipsis font-bold text-base"
    //           >
    //             Registered General Nurse
    //           </Link>
    //           <div className="flex items-center gap-1.5">
    //             <p className="text-sm font-medium text-muted-foreground">
    //               Rivia Co
    //             </p>
    //             <div className="h-1 w-1 rounded-full bg-black" />
    //             <p className="text-sm font-medium text-muted-foreground">
    //               Dzorwulu, Accra
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <Bookmark size={25} className="cursor-pointer" />
    //     </div>
    //     <div className="space-y-7">
    //       <ul className="flex gap-2 *:text-xs *:sm:text-sm *:bg-neutral-100/80 *:px-2 *:py-1 *:rounded-sm">
    //         <li>Fulltime</li>
    //         <li>Onsite</li>
    //         <li>Intermediate</li>
    //       </ul>
    //       <div className="space-y-2 text-muted-foreground">
    //         <p className="flex items-center text-xs sm:text-sm">
    //           <Clock className="h-4 w-4 mr-2" />
    //           Posted 2 days ago
    //         </p>
    //         <p className="flex items-center text-xs sm:text-sm">
    //           <Briefcase className="h-4 w-4 mr-2" />
    //           120 applicants
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <Separator />
    //   <div className="flex items-center justify-between">
    //     <p className="font-medium">
    //       GHC200<span className="text-muted-foreground text-xs">/month</span>
    //     </p>
    //     <Button>Apply Now</Button>
    //   </div>
    // </div>
    <Card className="min-w-80 snap-start">
      <CardHeader>
        <CardTitle>
          <div className="flex items-start justify-between">
            <div className="flex size-14 items-center justify-center overflow-hidden rounded-full border">
              <div className="size-10 rounded-full bg-gray-100"></div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="text-muted-foreground"
            >
              Save <Bookmark />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <h4>Amazon</h4>
            <p className="text-muted-foreground font-normal">3 days ago</p>
          </div>
          <h3 className="line-clamp-1 text-lg font-medium md:text-xl">
            Registered General Nurse
          </h3>
          <div className="inline-flex items-center gap-1">
            <Badge variant="secondary">Full-time</Badge>
            <Badge variant="secondary">Flexible Schedule</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <Separator />
          <div className="flex items-center justify-between pt-4">
            <div>
              <h4 className="text-sm font-medium">
                GHS {`${formatNumber(1500)} - ${formatNumber(3000)}`}
              </h4>
              <p className="text-xs font-medium text-gray-400">Dzorwulu, GA</p>
            </div>
            <div className="flex items-center gap-1">
              <Button size="icon" variant="outline" asChild>
                <Link href={`/jobs/job-slug`}>
                  <Eye className="size-4" />
                </Link>
              </Button>
              <Button asChild>
                <Link href={`/jobs/job-slug/apply`}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
