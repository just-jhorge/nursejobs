import {
  Hero,
  HowItWorks,
  Mentorship,
  BlogTopics,
  FeaturedJobs,
  WhyNurseJobs,
  Testimonials,
  LatestArticles,
  FAQ,
  Pricing,
} from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <HowItWorks />
      <Mentorship />
      <WhyNurseJobs />
      <Testimonials />
      <Pricing />
      <LatestArticles />
      <BlogTopics />
      <FAQ />
    </>
  );
}
