"use client";

import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function JobCard() {
  return (
    <Card className="w-80 cursor-pointer hover:shadow-lg border-2 border-blue-100 hover:border-blue-300 bg-blue-100/20 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-sm md:text-base">
              Registered General Nurse
            </CardTitle>
            <CardDescription>RiviaCo Clinics</CardDescription>
          </div>
          <Badge variant="outline">Full-time</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="size-4 mr-2 flex-shrink-0" />
            <span className="truncate">Tafo, Kumasi</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <DollarSign className="size-4 mr-2 flex-shrink-0" />
            <span className="truncate">12,000</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="size-4 mr-2" />
            <span className="truncate">2 days ago</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground pt-1">
            <Calendar className="size-4 mr-2" />
            <span className="truncate">Deadline: 25/08/2025</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
