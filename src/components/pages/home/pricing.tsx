import PricingCard from "@/components/custom/pricing-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type Plan = {
  name: string;
  price: number;
  popular: boolean;
  currency: "GHS";
  features: string[];
  description: string;
  target: "general" | "recruiter";
};

const generalPlans: Plan[] = [
  {
    name: "Starter",
    price: 0,
    currency: "GHS",
    popular: false,
    description: "Basic access to job listings.",
    target: "general",
    features: [
      "Browse job listings",
      "Save up to 3 jobs",
      "Apply to 3 jobs per month",
    ],
  },
  {
    name: "Professional",
    price: 30,
    currency: "GHS",
    popular: true,
    description: "For active job seekers.",
    target: "general",
    features: [
      "Everything in Starter",
      "Save up to 10 jobs",
      "Apply to 10 jobs per month",
      "Email notifications for new jobs",
    ],
  },
  {
    name: "Premium",
    price: 50,
    currency: "GHS",
    popular: false,
    description: "Full access with mentorship.",
    target: "general",
    features: [
      "CV review & optimization",
      "Unlimited job applications",
      "Save unlimited jobs",
      "Priority job alerts",
    ],
  },
];

const recruiterPlans: Plan[] = [
  {
    name: "Basic Recruiter",
    price: 199,
    currency: "GHS",
    popular: false,
    target: "recruiter",
    description: "For small clinics and facilities.",
    features: [
      "Post up to 3 jobs/month",
      "Basic candidate search",
      "Email support",
    ],
  },
  {
    name: "Pro Recruiter",
    price: 499,
    currency: "GHS",
    target: "recruiter",
    popular: true,
    description: "For growing healthcare facilities.",
    features: [
      "Post up to 5 jobs/month",
      "Advanced candidate search & filters",
      "Featured job listings",
      "Priority support",
    ],
  },
  {
    name: "Enterprise Recruiter",
    price: 799,
    currency: "GHS",
    popular: false,
    description: "For large hospitals and institutions.",
    target: "recruiter",
    features: [
      "Unlimited job postings",
      "Full candidate database access",
      "Dedicated account manager",
      "Premium placement on homepage",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <h3 className="text-center text-2xl font-bold mb-5">Pricing</h3>
        <div className="flex flex-col items-center">
          <Tabs
            className="w-full flex items-center justify-center"
            defaultValue="professionals"
          >
            <TabsList className="mb-5">
              <TabsTrigger value="professionals">Professionals</TabsTrigger>
              <TabsTrigger value="recruiters">Recruiters</TabsTrigger>
            </TabsList>
            <TabsContent value="professionals" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
                {generalPlans.map((plan) => (
                  <PricingCard key={plan.name} plan={plan} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="recruiters" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
                {recruiterPlans.map((plan) => (
                  <PricingCard key={plan.name} plan={plan} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
