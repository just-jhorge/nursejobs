import {
  HowItWorks,
  Mentorship,
  Introduction,
  FeaturedJobs,
  WhyNurseJobs,
} from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <Introduction />
      <FeaturedJobs />
      <HowItWorks />
      <Mentorship />
      <WhyNurseJobs />

      {/* Testimonials */}
      <section className="w-full py-12 md:py-16 bg-blue-500">
        Testimonials
      </section>

      {/* Latest articles */}
      <section className="w-full py-12 md:py-16 bg-yellow-500">
        Latest articles
      </section>
    </>
  );
}
