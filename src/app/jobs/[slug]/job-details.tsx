import {
  Banknote,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { formatNumber } from "@/utils/format-number";

const job = {
  jobTitle: "Registered Nurse",
  jobDescription:
    "We are seeking the services of a compassionate and dedicated Registered Nurse to provide high-quality patient care, support medical teams, and ensure the best outcomes for our patients.",
  responsibilities: [
    "Assess, plan, implement, and evaluate patient care in accordance with professional standards.",
    "Administer medications and treatments as prescribed by physicians.",
    "Monitor and record patient symptoms, progress, and vital signs accurately.",
    "Educate patients and their families about health conditions, treatments, and preventive care.",
    "Collaborate with doctors and healthcare staff to develop and update individualized care plans.",
  ],
  requirements: [
    "Bachelor’s degree in Nursing (or equivalent qualification).",
    "Valid Nursing and Midwifery Council (NMC) license.",
    "Minimum of 2 years of clinical nursing experience.",
    "Strong communication and interpersonal skills.",
    "Ability to work effectively in a fast-paced and team-oriented environment.",
  ],
  skills: [
    "Clinical assessment and critical thinking",
    "Patient care and empathy",
    "Time management and organizational skills",
    "Knowledge of medical procedures and protocols",
    "Team collaboration and adaptability",
  ],
  benefits: [
    "Competitive salary",
    "Health and wellness insurance",
    "Paid annual and sick leave",
    "Opportunities for continuing professional development (CPD)",
    "Supportive and collaborative working environment",
  ],
  jobInformation: {
    location: "Accra, Ghana",
    jobType: "Full-time",
    salaryRange: { starting: 3000, ending: 5000 },
    applicationDeadline: "2025-09-30",
    experienceLevel: "Mid-level",
  },
  company: {
    name: "HealthFirst Medical Centre",
    about:
      "HealthFirst Medical Centre is a leading healthcare facility in Accra, dedicated to providing exceptional medical and nursing services. We pride ourselves on a patient-centered approach, continuous innovation, and a supportive work environment for our staff.",
    industry: "Healthcare",
    companySize: "200+ employees",
    website: "https://www.healthfirstghana.com",
  },
};

export default function JobDetails() {
  return (
    <section className="w-full bg-background pt-20 md:pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="mb-5 text-muted-foreground text-sm">
          All Jobs {">"}{" "}
          <span className="text-primary font-medium">
            Registered General Nurse
          </span>
        </div>
        <div className="space-y-10">
          {/* Job title, apply, share and save buttons */}
          <div className="flex flex-col md:flex-row items-start gap-8 w-full">
            <div className="flex-1 flex gap-5">
              <div className="size-16 md:size-20 rounded-md relative bg-gray-100"></div>
              <div>
                <h2 className="text-base md:text-2xl font-bold">
                  {job.jobTitle}
                </h2>
                <p className="text-sm md:text-base font-medium">
                  {job.company.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Posted: Tuesday, 24th July, 2025
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <p className="text-base md:text-lg font-semibold">
                  Submit Application{" "}
                </p>
                <Badge
                  variant="outline"
                  className="bg-red-100 text-red-600 border-none"
                >
                  Apply before{" "}
                  {format(
                    job.jobInformation.applicationDeadline,
                    "dd MMM yyyy"
                  )}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button className="flex-1">Apply Now</Button>
                <Button size="icon" variant="outline">
                  <Share2 />
                </Button>
                <Button size="icon" variant="outline">
                  <Heart />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-start gap-8 text-sm md:text-base">
            {/* Description, Requirements and Skills */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="mb-2 font-medium">Job Description</h3>
                  <Card className="shadow-none">
                    <CardContent>
                      <p className="mb-4">{job.jobDescription}</p>
                      <h4 className="text-sm font-bold mb-2">
                        RESPONSIBILITIES
                      </h4>
                      <ul className="list-disc list-inside">
                        {job.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="not-last:pb-1">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Job Requirements</h3>
                  <Card className="shadow-none">
                    <CardContent>
                      <ul className="list-disc list-inside">
                        {job.requirements.map((requirement) => (
                          <li key={requirement} className="not-last:pb-1">
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Skills Needed</h3>
                  <Card className="shadow-none">
                    <CardContent>
                      <div className="inline-flex flex-wrap items-center gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            {/* Job information and Company Overview */}
            <div className="w-full md:w-1/3">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="mb-2 font-medium">
                    Job Information &amp; Benefits
                  </h3>
                  <Card className="shadow-none">
                    <CardContent className="grid grid-cols-2 gap-2">
                      <div className="border p-2 text-sm flex items-center rounded-sm text-muted-foreground">
                        <Briefcase className="mr-3 size-4" />
                        {job.jobInformation.jobType}
                      </div>
                      <div className="border p-2 text-sm flex items-center rounded-sm text-muted-foreground">
                        <MapPin className="mr-3 size-4" />
                        {job.jobInformation.location}
                      </div>
                      <div className="border p-2 text-sm flex items-center rounded-sm text-muted-foreground">
                        <GraduationCap className="mr-3 size-4" />
                        {job.jobInformation.experienceLevel}
                      </div>
                      <div className="border p-2 text-sm flex items-center rounded-sm text-muted-foreground">
                        <Banknote className="mr-3 size-4" />
                        GHC{" "}
                        {`${formatNumber(
                          job.jobInformation.salaryRange.starting
                        )} - ${formatNumber(
                          job.jobInformation.salaryRange.ending
                        )}`}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Company</h3>
                  <Card className="shadow-none">
                    <CardContent>
                      <article>
                        <h3 className="text-sm font-medium mb-2">
                          About {job.company.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-5">
                          {job.company.about}
                        </p>
                        <a
                          href={job.company.website}
                          target="_blank"
                          className="font-semibold text-primary underline underline-offset-4 text-sm"
                        >
                          {job.company.website}
                        </a>
                      </article>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
