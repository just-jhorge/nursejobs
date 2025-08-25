"use client";

import { Button } from "@/components/ui/button";
import {
  FileText,
  Hospital,
  Search,
  Stethoscope,
  Upload,
  User,
  UserCheck,
  Users,
} from "lucide-react";

const recruitersProcess = [
  {
    step: 1,
    icon: FileText,
    title: "Post a Job",
    description:
      "Create detailed job listings with requirements, benefits, and application deadlines.",
  },
  {
    step: 2,
    icon: Users,
    title: "Review Candidates",
    description:
      "Browse applications, review profiles, and shortlist qualified healthcare professionals.",
  },
  {
    step: 3,
    icon: UserCheck,
    title: "Hire Suitable Applicants",
    description:
      "Connect with top candidates and make hiring decisions to build your healthcare team.",
  },
];

const workersProcess = [
  {
    step: 1,
    icon: User,
    title: "Create Your Profile",
    description:
      "Set up your professional profile with your qualifications, experience, and preferences.",
  },
  {
    step: 2,
    icon: Upload,
    title: "Upload Your CV",
    description:
      "Upload your resume and certifications to showcase your skills and experience.",
  },
  {
    step: 3,
    icon: Search,
    title: "Apply to Jobs",
    description:
      "Browse and apply to healthcare positions that match your skills and career goals.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="leading-tight text-center mb-8">
          <h2 className="text-lg md:text-3xl font-bold">How It Works</h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Simple steps to connect healthcare professionals with opportunities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-5 mb-5">
              <Stethoscope className="size-6" />
              <h2 className="text-lg md:text-2xl font-semibold">
                For Healthcare Workers
              </h2>
            </div>
            <div className="space-y-5 mb-5">
              {workersProcess.map((step, idx) => {
                const Icon = step.icon;

                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="size-10 bg-neutral-950 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="size-5 text-neutral-950" />
                        <h4 className="text-base md:text-lg font-semibold text-foreground">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5 mb-5">
              <Hospital className="size-6" />
              <h2 className="text-lg md:text-2xl font-semibold">
                For Recruiters &amp; Employers
              </h2>
            </div>
            <div className="space-y-5 mb-5">
              {recruitersProcess.map((step, idx) => {
                const Icon = step.icon;

                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="size-10 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="size-5 text-neutral-900" />
                        <h4 className="text-base md:text-lg font-semibold text-foreground">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
