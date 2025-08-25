import {
  HowItWorks,
  Mentorship,
  BlogTopics,
  Introduction,
  FeaturedJobs,
  WhyNurseJobs,
  Testimonials,
  LatestArticles,
} from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <Introduction />
      <FeaturedJobs />
      <HowItWorks />
      <Mentorship />
      <WhyNurseJobs />
      <Testimonials />
      <LatestArticles />
      <BlogTopics />
    </>
  );
}
