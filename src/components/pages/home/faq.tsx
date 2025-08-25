import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    value: "question-1",
    question: "What is this platform about?",
    answer:
      "This platform connects nurses, midwives, and healthcare facilities, offering job opportunities, professional development resources, and a community for learning and growth. Whether you're a working nurse, a student, or an employer, our platform provides tools to advance your career and find the right talent.",
  },
  {
    value: "question-2",
    question: "How do I sign up?",
    answer:
      "You can sign up by clicking the 'Sign Up' button on the homepage. Choose your role (Staff, Student, or Facility) and fill in the necessary details like your name, contact information, and role-specific information (e.g., your facility's name or your nursing credentials).",
  },
  {
    value: "question-3",
    question: "How do I attend events?",
    answer:
      "You can browse and register for events directly on our website. Some events are free, while others may require a registration fee. Once you’ve signed up for an event, you will receive all relevant details, including event dates, times, and access information.",
  },
  {
    value: "question-4",
    question: "Is my data safe on this platform?",
    answer:
      "Yes, your data is secure. We use industry-standard encryption protocols to protect your personal information. You can also review our Privacy Policy and Terms of Service for more details on how we handle your data.",
  },
  {
    value: "question-5",
    question: "How do I contact customer support?",
    answer:
      "If you need assistance, you can contact our support team by visiting the 'Contact Us' page. You can reach us via email or use the live chat feature available on the website for quick support.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="leading-tight mb-5">
          <h2 className="text-lg md:text-2xl font-bold">
            Frequestly Asked Questions
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Let&apos;s answer some frequently asked questions
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
