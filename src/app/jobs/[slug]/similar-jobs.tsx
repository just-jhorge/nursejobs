import JobCard from "@/components/custom/job-card";

export default function SimilarJobs() {
  return (
    <section className="w-full py-6 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <h3 className="text-xl font-semibold mb-5">Simimar Jobs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[...new Array(6)].map((_, idx) => (
            <JobCard key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
