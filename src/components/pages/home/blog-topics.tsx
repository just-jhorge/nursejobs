import { Button } from "@/components/ui/button";
import Link from "next/link";

const topics = [
  {
    topic: "Pay",
    description:
      "Guides and advice on salaries, benefits, and negotiating better pay in healthcare.",
    slug: "pay",
  },
  {
    topic: "Career Paths",
    description:
      "Explore different roles and opportunities to grow your career in healthcare.",
    slug: "career-paths",
  },
  {
    topic: "How to become a...",
    description:
      "Step-by-step guides on how to qualify and succeed in specific healthcare roles.",
    slug: "how-to-become-a",
  },
  {
    topic: "Skills Training",
    description:
      "Resources to help you build practical skills and continue your professional development.",
    slug: "skills-training",
  },
  {
    topic: "Inspiration",
    description:
      "Real stories and motivational content to inspire your journey in healthcare.",
    slug: "inspiration",
  },
  {
    topic: "Interviews & Applications",
    description:
      "Tips and strategies to help you stand out in job applications and interviews.",
    slug: "interviews-applications",
  },
  {
    topic: "Opinions",
    description:
      "Perspectives and insights from healthcare professionals on key industry topics.",
    slug: "opinions",
  },
  {
    topic: "Wellbeing",
    description:
      "Advice on maintaining balance, managing stress, and supporting mental health.",
    slug: "wellbeing",
  },
  {
    topic: "Migrating/Emigrating",
    description:
      "Information and experiences about working abroad and relocating as a healthcare professional.",
    slug: "migrating-emigrating",
  },
  {
    topic: "Qualifications",
    description:
      "Guidance on essential qualifications, certifications, and further study options.",
    slug: "qualifications",
  },
  {
    topic: "Agency Working",
    description:
      "Everything you need to know about working with healthcare agencies and flexible roles.",
    slug: "agency-working",
  },
  {
    topic: "Others",
    description:
      "Additional resources and articles covering a variety of healthcare topics.",
    slug: "others",
  },
];

export default function BlogTopics() {
  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="leading-tight mb-5">
          <h2 className="text-lg md:text-3xl font-bold">
            Careers - Learning & Development Advice
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Guidance to grow your skills and advance your career.
          </p>
        </div>
        <div className="space-y-2 *:text-sm md:*:text-base mb-8">
          <p>
            Our platform is more than just a place to find nursing jobs — it’s a
            vibrant community of Nurses, Midwives, Care Assistants, Home
            Managers, Social Workers, ODPs, students, and many others. Together,
            they share knowledge, experiences, and advice with thousands of
            professionals. Through articles, guides, videos, and podcasts, our
            members discuss everything from pay and job interviews to agency
            work and opportunities abroad.
          </p>
          <p>
            As the community continues to grow, so does its impact. Our
            collective voice is stronger than ever, and we’re proud to be
            recognized as a trusted source on a wide range of topics. Most
            importantly, our content is shaped by real healthcare professionals
            — ensuring that the advice, opinions, and guides you’ll find here
            are grounded in genuine experience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-8">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="border w-full h-40 md:h-44 flex flex-col justify-between bg-card shadow-sm rounded-md space-y-3 p-3 md:p-6"
            >
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base line-clamp-1">
                  {topic.topic}
                </h3>
                <p className="text-xs md:text-base md:line-clamp-2">
                  {topic.description}
                </p>
              </div>
              <Link
                href={`/blog/${topic.slug}`}
                className="w-fit text-primary underline underline-offset-4 text-sm md:text-base font-medium"
              >
                Articles
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <Button>Read all Blogs</Button>
        </div>
      </div>
    </section>
  );
}
