"use client";

export default function WhyNurseJobs() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <h2 className="text-xl md:text-3xl text-center font-bold mb-5">
          Why NurseJobs.com
        </h2>
        <div>
          <p className="text-sm md:text-lg text-center max-w-4xl mx-auto mb-5">
            We offer thousands of nursing, healthcare, and social care
            opportunities at every level, and across all regions of Ghana. From
            Registered Nurses and Midwives to Care Assistants and Facility
            Managers, we are the trusted destination for healthcare
            professionals. We proudly partner with Ghana’s leading hospitals,
            clinics, and healthcare providers – supporting career growth across
            a wide range of roles. And with the strong community we’ve built,
            our work is guided by people who truly understand nursing,
            healthcare, and the unique needs of Ghana’s health sector.
          </p>
          <div className="mb-10">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="font-bold text-xl md:text-3xl mb-2">50K+</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Healthcare professionals
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="font-bold text-xl md:text-3xl mb-2">1.5K+</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Active Job Listings
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="font-bold text-xl md:text-3xl mb-2">95%</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Successful Placements
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center text-xl md:text-2xl font-semibold mb-5">
              Trusted by Leading Healthcare Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {[...new Array(12)].map((_, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  Company Logo
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
