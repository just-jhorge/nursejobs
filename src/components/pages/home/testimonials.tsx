const testimonials = [
  {
    quote:
      "This platform made my job search so much easier. Within weeks, I found a role that matched my skills perfectly.",
    name: "Ama Boateng",
    role: "Registered Nurse",
    company: "Korle-Bu Teaching Hospital",
  },
  {
    quote:
      "As a healthcare professional, I wanted a place that truly understands our industry — and I finally found it here.",
    name: "Chinedu Okeke",
    role: "Midwife",
    company: "Lagos University Teaching Hospital",
  },
  {
    quote:
      "The opportunities listed are real, relevant, and tailored to my career goals. I couldn’t have asked for a better experience.",
    name: "Fatoumata Diallo",
    role: "Care Assistant",
    company: "Dakar Community Health Centre",
  },
  {
    quote:
      "Thanks to this community, I’ve connected with employers I never thought I’d have access to. It has changed my career journey.",
    name: "Kwesi Mensah",
    role: "Home Care Manager",
    company: "Accra Wellness Home",
  },
  {
    quote:
      "I love how simple and straightforward the process is. From browsing jobs to applying, everything felt seamless.",
    name: "Zainab Abubakar",
    role: "Clinical Officer",
    company: "Abuja Medical Centre",
  },
  {
    quote:
      "This isn’t just a job site — it’s a support system for healthcare professionals across the region.",
    name: "Josephine Kouadio",
    role: "Paediatric Nurse",
    company: "Abidjan Children’s Hospital",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="leading-tight mb-5">
          <h2 className="text-lg md:text-3xl font-bold">What Our People Say</h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Read some reviews by our community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-5">
                <div className="size-11 relative rounded-md bg-gray-200"></div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary font-medium text-xs md:text-sm truncate">
                    {`${testimonial.role}, ${testimonial.company}`}
                  </p>
                </div>
              </div>
              <p className="text-lg font-semibold">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
